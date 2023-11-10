<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$dbHost = "oceanus.cse.buffalo.edu";
$dbUsername = "eriklich"; // Replace with your username
$dbPassword = "teamsomething"; // Replace with your password
$dbName = "cse442_2023_fall_team_x_db"; // Replace with your database name

// Establish database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to fetch all users
function fetchUsers($dbConn) {
    $sql = "SELECT * FROM users"; // Query to select all users
    $result = $dbConn->query($sql);

    $users = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($users, $row);
        }
        echo json_encode($users); // Send users data as JSON
    } else {
        echo json_encode(array('message' => 'No users found'));
    }
}

// Only handle POST requests
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Fetch and return all users
    fetchUsers($conn);
} else {
    echo json_encode(array('message' => 'Invalid request method'));
}

// Close database connection
$conn->close();

?>
