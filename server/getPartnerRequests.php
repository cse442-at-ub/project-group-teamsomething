<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Database connection setup
$dbHost = "oceanus.cse.buffalo.edu";
$dbUsername = "eriklich"; // Your actual username
$dbPassword = "teamsomething"; // Your actual password
$dbName = "cse442_2023_fall_team_x_db"; // Your actual database name

// Establish a new database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check for a connection error and respond with an error message
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Function to send a friend request
function sendFriendRequest($conn, $sender, $receiver) {
    // Prepare the SQL statement to insert a new friend request
    $stmt = $conn->prepare("INSERT INTO friend_requests (requester_username, requestee_username, status) VALUES (?, ?, 'pending')");
    $stmt->bind_param("ss", $sender, $receiver);

    if ($stmt->execute()) {
        // Success
        echo json_encode(['message' => 'Friend request sent successfully']);
    } else {
        // Error
        http_response_code(500);
        echo json_encode(['error' => 'Could not send friend request']);
    }

    // Close the statement
    $stmt->close();
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Check if both sender and receiver are provided
    if (isset($data['sender']) && isset($data['receiver'])) {
        // Call the function to send the friend request
        sendFriendRequest($conn, $data['sender'], $data['receiver']);
    } else {
        // Respond with an error message if sender or receiver is missing
        http_response_code(400);
        echo json_encode(['error' => 'Both sender and receiver are required']);
    }
} else {
    // Respond with an error message for invalid request methods
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method. Only POST is accepted']);
}

// Close the database connection
$conn->close();
