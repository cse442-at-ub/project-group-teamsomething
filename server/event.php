<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Database configuration
$dbHost = "oceanus.cse.buffalo.edu";
$dbUsername = "eriklich"; // Replace with your username
$dbPassword = "teamsomething"; // Replace with your password
$dbName = "cse442_2023_fall_team_x_db"; // Replace with your database name


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $title = $data['title'] ?? '';
    $start = $data['start'] ?? '';
    $end = $data['end'] ?? '';
    $event_id = $data['event_id'] ?? '';

    // Connect to db
    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    // Check username isn't already registered
    $sql = "SELECT id FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($id);
    $stmt->store_result();
    $stmt->fetch();

    $stmt->close();

    // Execute in db
    // "INSERT INTO user_description (wager, description, user_id) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE wager=?, description=?"
    $stmt = $conn->prepare("INSERT INTO events (title, start, end, user_id, event_id) VALUES(?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=?, start=?, end=?");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => "Statement preparation failed: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("ssssssss", $title, $start, $end, $id, $event_id, $title, $start, $end);

    if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
        exit();
    }

    $stmt->close();
    $conn->close();

    // Prepare the data for the response
    $responseData = [
        'username' => $username,
        'title' => $title,
        'start' => $start,
        'end' => $end,
        'id' => $id,
        'event_id' => $event_id,
        'message' => 'update description successful'
    ];

    // Return a success response with data
    http_response_code(200);
    echo json_encode($responseData);
    exit();
} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

    $data = json_decode(file_get_contents("php://input"), true);
    $event_id = (string)$_GET['event_id'];

    // Connect to db
    //$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    // Check username isn't already registered
    $sql = "DELETE FROM events WHERE event_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $event_id);
    $stmt->execute();

    $stmt->close();
    $conn->close();

    // Prepare the data for the response
    $responseData = [
        'event_id' => $event_id,
    ];

    // Return a success response with data
    http_response_code(200);
    echo json_encode($responseData);
    exit();

}
