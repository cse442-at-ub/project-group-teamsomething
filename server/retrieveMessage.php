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
    $sender_username = $data['sender_username'] ?? '';
    $receiver_username = $data['receiver_username'] ?? '';

    // Connect to the database
    $conn = connectToDatabase();

    // Fetch the updated message history
    $stmtSelect = $conn->prepare("SELECT * FROM messages WHERE (sender_username=? AND receiver_username=?) OR (sender_username=? AND receiver_username=?) ORDER BY timestamp ASC");
    $stmtSelect->bind_param("ssss", $sender_username, $receiver_username, $sender_username, $receiver_username);
    $stmtSelect->execute();
    $result = $stmtSelect->get_result();
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
    $stmtSelect->close();
    $conn->close();

    echo json_encode($messages);
}