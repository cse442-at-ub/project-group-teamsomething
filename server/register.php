<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $fname = $data['fname'] ?? '';
    $lname = $data['lname'] ?? '';

    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    // Check username isn't already registered
    $sql = "SELECT username FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        http_response_code(400);
        echo json_encode(['message' => 'Username already registered']);
        exit();
    }
    $stmt->close();

    if (strlen($password) < 8 || strlen($password) > 31) {
        http_response_code(400);
        echo json_encode(['message' => 'Password incorrect length']);
        exit();
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Execute in db
    $stmt = $conn->prepare("INSERT INTO users (username, password_hash, fname, lname) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => "Statement preparation failed: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("ssss", $username, $hashedPassword, $fname, $lname);

    if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
        exit();
    }

    $stmt->close();
    $conn->close();

    // Prepare the data for the response
    $responseData = [
        'id' => $last_id,
        'username' => $username,
        'fname' => $fname,
        'lname' => $lname,
        'message' => 'Registration successful'
    ];

    // Return a success response with data
    http_response_code(200);
    echo json_encode($responseData);
    exit();
}