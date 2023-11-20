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

// Fetch reviews from the database
$sql = "SELECT partner, review FROM reviews";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $partner = $row["partner"];
        $review = $row["review"];

        // Output the data in JSON format
        $data[] = array(
            'partner' => $partner,
            'review' => $review
        );
    }

    // Send the data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "0 results";
}

$conn->close();

?>