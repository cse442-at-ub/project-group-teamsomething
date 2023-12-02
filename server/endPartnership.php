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
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $requester = $data['requester_username'] ?? '';
    $receiver = $data['receiver_username'] ?? '';

    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    // First, update the friend request status
    $sql = "DELETE from friend_requests WHERE (requester_username = ? AND requestee_username = ? AND status = 'accepted') OR (requestee_username = ? AND requester_username = ? AND status = 'accepted')";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $requester, $receiver, $requester, $receiver);

    if ($stmt->execute()) {
        // Check if any rows were updated in the friend requests table
        if ($stmt->affected_rows > 0) {
            // Now, update the users table for both users
            $sqlUpdateUser = "UPDATE users SET partner = NULL WHERE username = ? OR username = ?";
            $stmtUpdateUser = $conn->prepare($sqlUpdateUser);
            $stmtUpdateUser->bind_param("ss", $requester, $receiver);

            if ($stmtUpdateUser->execute()) {
                $sqla = "INSERT INTO past_partners (user, partner) VALUES (?, ?)";
                $stmt = $conn->prepare($sqla);
                $stmt->bind_param("ss", $requester, $receiver);
                $stmt->execute();
                $sqlb = "INSERT INTO past_partners (user, partner) VALUES (?, ?)";
                $stmt = $conn->prepare($sqlb);
                $stmt->bind_param("ss", $receiver, $requester);
                $stmt->execute();
                echo json_encode(['message' => 'Partnership ended and user partners updated']);
            } else {
                echo json_encode(['message' => 'Partnership ende, but error updating user partners']);
            }

            $stmtUpdateUser->close();
        } else {
            echo json_encode(['message' => 'No pending friend requests found']);
        }
    } else {
        echo json_encode(['message' => 'Error updating friend request']);
    }

    $stmt->close();
    $conn->close();
} else {
    http_response_code(400);
    echo json_encode(['message' => 'Only POST method is accepted.']);
}
