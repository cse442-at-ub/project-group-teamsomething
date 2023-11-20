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
$username = $data['username'] ?? null;

$stmt = $conn->prepare("SELECT partner FROM `users` WHERE username=?");
$stmt->bind_param("s", $username);
if ($stmt->execute()) {
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        // fetch associative array
        while ($row = $result->fetch_assoc()) {
            $partner = $row["partner"];
        }
        // Return the partner information
        $response = array('partner' => $partner);
        echo json_encode($response);
    } else {
        echo json_encode(array('error' => 'No user found'));
    }
} else {
    echo "Error in execution: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
