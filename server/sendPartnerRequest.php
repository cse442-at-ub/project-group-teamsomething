<?php

// SendFriendRequest.php

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

// Function to send a friend request
function sendFriendRequest($conn, $requesterId, $requesteeId)
{
    $stmt = $conn->prepare("INSERT INTO friend_requests (requester_id, requestee_id) VALUES (?, ?)");
    $stmt->bind_param("ii", $requesterId, $requesteeId);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Friend request sent.']);
    } else {
        echo json_encode(['error' => 'Could not send friend request.']);
    }

    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    sendFriendRequest($conn, $data['requesterId'], $data['requesteeId']);
} else {
    echo json_encode(['error' => 'Invalid request method.']);
}

$conn->close();
