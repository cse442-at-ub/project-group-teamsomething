<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
	$action = $data['action'];
	$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

	// user changing username
	if ($action == "changeUsername"){

        $old_username = $data['oldUsername'];
        $new_username = $data['newUsername'];

        $stmt = $conn->prepare("UPDATE users SET username=? WHERE username=?");
		$stmt->bind_param("ss", $new_username, $old_username);
		$stmt->execute();
		echo ("username changed successfully");
	}

	$conn->close();
	exit();
}

?>
