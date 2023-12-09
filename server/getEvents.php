<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$dbHost = "oceanus.cse.buffalo.edu";
// $dbHost = "localhost";
$dbUsername = "eriklich"; // Replace with your username
$dbPassword = "teamsomething"; // Replace with your password
$dbName = "cse442_2023_fall_team_x_db"; // Replace with your database name

// Function to fetch all users
function fetchEvents($dbConn, $username) {

    $sql = "SELECT id FROM users WHERE username = ?";
    $stmt = $dbConn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($id);
    $stmt->store_result();
    $stmt->fetch();
    $stmt->close();
    
    $sql = "SELECT * FROM events WHERE user_id = ".strval($id); // Query to select all users
    $stmt = $dbConn->query($sql);
    
    $events = array();
    while ($row = $stmt->fetch_assoc()) {
        array_push($events, $row);
    }
    echo json_encode($events); // Send users data as JSON

    $stmt->close();
}

// Only handle POST requests
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Establish database connection
    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch and return all users
    $username = (string)$_GET['username'];
    fetchEvents($conn, $username);

    // Close database connection
    $conn->close();

} else {
    http_response_code(400);
    echo json_encode(['message' => "Unsupported request method"]);
}

?>
