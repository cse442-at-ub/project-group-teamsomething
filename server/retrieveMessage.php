<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Retrieve all the message history for a given user
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $text = $data['text'] ?? '';
    $sender_username = $data['sender_username'] ?? '';
    $receiver_username = $data['receiver_username'] ?? '';

    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "username", "password", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    // Assuming 'username' is unique for each user
    $stmt = $conn->prepare("SELECT * FROM messages WHERE sender_username=? OR receiver_username=? ORDER BY timestamp ASC");
    $stmt->bind_param("ss", $sender_username, $receiver_username);
    $stmt->execute();
    $result = $stmt->get_result();
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
    $stmt->close();
    $conn->close();

    echo json_encode($messages);
}