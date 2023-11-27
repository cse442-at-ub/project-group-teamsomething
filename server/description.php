<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $description = $data['description'] ?? '';
    $wager = $data['wager'] ?? '';

    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
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
    $stmt = $conn->prepare("INSERT INTO user_description (wager, description, user_id) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE wager=?, description=?");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => "Statement preparation failed: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("sssss", $wager, $description, $id, $wager, $description);

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
        'description' => $description,
        'wager' => $wager,
        'id' => $id,
        'message' => 'update description successful'
    ];

    // Return a success response with data
    http_response_code(200);
    echo json_encode($responseData);
    exit();
} else {

    $username = (string)$_GET['username'];
    // var_dump($username);
    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    $sql = "SELECT id FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($id);
    $stmt->store_result();
    $stmt->fetch();

    $stmt->close();

    $sql = "SELECT * FROM user_description WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => "Statement preparation failed: " . $conn->error]);
        exit();
    }
    $stmt->bind_param("s", $id);

    if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
        exit();
    }
    $stmt->bind_result($did, $wager, $description, $user_id);
    $stmt->store_result();
    $stmt->fetch();

    $responseData = [
        'username' => $username,
        'wager' => $wager,
        'description' => $description,
    ];

    $stmt->close();
    $conn->close();

    // Return a success response with data
    http_response_code(200);
    echo json_encode($responseData);

    exit();
}