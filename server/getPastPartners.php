<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

$servername = "oceanus.cse.buffalo.edu";
$username = "eriklich";
$password = "teamsomething";
$dbname = "cse442_2023_fall_team_x_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the user ID from the request
$userID = $_GET['userID'];

// Use prepared statement to fetch partners associated with the logged-in user
$sql = "SELECT * FROM past_partners WHERE user = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $userID);
$stmt->execute();

$result = $stmt->get_result();

$partners = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $partners[] = array(
            'name' => $row['partner']
        );
    }
}

// Close the database connection
$stmt->close();
$conn->close();

// Return the partners data as JSON
echo json_encode($partners);?>