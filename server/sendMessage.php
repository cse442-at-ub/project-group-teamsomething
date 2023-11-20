<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Function to establish a database connection
function connectToDatabase()
{
    $host = 'oceanus.cse.buffalo.edu';
    $username = 'eriklich';
    $password = 'teamsomething';
    $database = 'cse442_2023_fall_team_x_db';

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    return $conn;
}

// Retrieve all the message history for a given user
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $text = $data['text'] ?? '';
    $sender_username = $data['sender_username'] ?? '';
    $receiver_username = $data['receiver_username'] ?? '';

    // Connect to the database
    $conn = connectToDatabase();

    // Insert the new message into the messages table
    $stmtInsert = $conn->prepare("INSERT INTO messages (sender_username, receiver_username, content, timestamp) VALUES (?, ?, ?, NOW())");
    $stmtInsert->bind_param("sss", $sender_username, $receiver_username, $text);
    $stmtInsert->execute();
    $stmtInsert->close();
}