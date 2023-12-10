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

// Get data from the request body
$data = json_decode(file_get_contents("php://input"), true);

$partner = $conn->real_escape_string($data['partner']);
$review = $conn->real_escape_string($data['review']);

// Insert data into the reviews table
$sql = "INSERT INTO reviews (partner, review) VALUES ('$partner', '$review')";

if ($conn->query($sql) === TRUE) {
    // If the insertion is successful, return the inserted data
    $response = array('partner' => $partner, 'review' => $review);
    echo json_encode($response);
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>