<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function sendResponse($message, $status = 200)
{
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit();
}

function verifyUser($username, $password)
{
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

    if ($conn->connect_error) {
        sendResponse("Connection failed: " . $conn->connect_error, 500);
    }

    $stmt = $conn->prepare("SELECT password_hash FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows === 1) {
            $stmt->bind_result($storedPasswordHash);
            $stmt->fetch();

            if (password_verify($password, trim($storedPasswordHash))) {
                return true;
            }
        }
    }
    return false;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    $loginResult = verifyUser($username, $password);

    if ($loginResult == false) {
        sendResponse("incorrect credentials", 400);
    }

    sendResponse("Login successful");
}
