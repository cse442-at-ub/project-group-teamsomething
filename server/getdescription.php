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

$conn = connectToDatabase();

$sql = "SELECT u.username, ud.wager, ud.description 
        FROM users u 
        LEFT JOIN user_description ud ON u.id = ud.user_id";

$result = $conn->query($sql);

if ($result) {
    $users = [];
    while ($row = $result->fetch_assoc()) {
        array_push($users, [
            'username' => $row['username'],
            'wager' => $row['wager'],
            'description' => $row['description']
        ]);
    }

    http_response_code(200);
    echo json_encode($users);
} else {
    http_response_code(500);
    echo json_encode(['message' => "Error in SQL execution: " . $conn->error]);
}

$conn->close();
?>