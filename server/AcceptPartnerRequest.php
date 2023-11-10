<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Database connection setup
$dbHost = "oceanus.cse.buffalo.edu";
$dbUsername = "eriklich"; // Replace with your username
$dbPassword = "teamsomething"; // Replace with your password
$dbName = "cse442_2023_fall_team_x_db"; // Replace with your database name

// Establish a new database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check for a connection error and respond with an error message
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => "Connection failed: " . $conn->connect_error]);
    exit();
}

/**
 * Accepts a friend request by setting its status to 'accepted'.
 *
 * @param mysqli $conn The database connection object.
 * @param int $requestId The ID of the friend request to accept.
 */
function acceptFriendRequest($conn, $requestId)
{
    // Initiate a transaction
    $conn->begin_transaction();

    try {
        // Prepare and execute the update statement for friend_requests
        $stmt = $conn->prepare("UPDATE friend_requests SET status = 'accepted' WHERE id = ?");
        $stmt->bind_param("i", $requestId);
        $stmt->execute();

        // Check if any rows were affected by the update
        if ($stmt->affected_rows === 0) {
            throw new Exception('No friend request found with the given ID.');
        }

        // Close the statement
        $stmt->close();

        // Assuming the usernames of the requester and requestee are known,
        // additional updates to the 'users' table would go here.

        // Commit the transaction
        $conn->commit();

        // Respond with a success message
        echo json_encode(['message' => 'Friend request accepted.']);
    } catch (Exception $e) {
        // Roll back the transaction in case of an error
        $conn->rollback();
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

// Check if the request method is POST and the 'requestId' is provided
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['requestId'])) {
        // Call the function to accept the friend request
        acceptFriendRequest($conn, $data['requestId']);
    } else {
        // Respond with an error message if 'requestId' is missing
        http_response_code(400);
        echo json_encode(['error' => 'The requestId is required.']);
    }
} else {
    // Respond with an error message for invalid request methods
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method. Only POST is accepted.']);
}

// Close the database connection
$conn->close();
