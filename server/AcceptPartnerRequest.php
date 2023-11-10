<?php

// AcceptFriendRequest.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Database connection setup
$dbHost = "oceanus.cse.buffalo.edu";
$dbUsername = "your_username";
$dbPassword = "your_password";
$dbName = "your_database_name";

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to accept a friend request
function acceptFriendRequest($conn, $requestId)
{
    $stmt = $conn->prepare("UPDATE friend_requests SET status = 'accepted' WHERE id = ?");
    $stmt->bind_param("i", $requestId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Friend request accepted.']);
    } else {
        echo json_encode(['error' => 'Could not accept friend request.']);
    }

    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    acceptFriendRequest($conn, $data['requestId']);
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}

$conn->close();
