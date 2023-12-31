<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = json_decode(file_get_contents("php://input"), true);
$action = $data['action'];
$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// user changing username
	if ($action == "changeUsername"){

        $old_username = $data['oldUsername'];
        $new_username = $data['newUsername'];

		// Check username isn't already registered
		$sql = "SELECT username FROM users WHERE username = ?";
		$stmt = $conn->prepare($sql);
		$stmt->bind_param("s", $new_username);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			//http_response_code(400);
			echo json_encode(['message' => 'Username taken already']);
			exit();
    	}

        $stmt = $conn->prepare("UPDATE users SET username=? WHERE username=?");
		$stmt->bind_param("ss", $new_username, $old_username);
		$stmt->execute();

		$stmt = $conn->prepare("UPDATE friend_requests SET requester_username=? WHERE requester_username=?");
		$stmt->bind_param("ss", $new_username, $old_username);
		$stmt->execute();

		$stmt = $conn->prepare("UPDATE friend_requests SET requestee_username=? WHERE requestee_username=?");
		$stmt->bind_param("ss", $new_username, $old_username);
		$stmt->execute();

		echo ("username changed successfully");
	}

	// user changing first name
	if ($action == "changeFname"){

		$username = $data['username'];
		$new_fname = $data['fname'];

		$stmt = $conn->prepare("UPDATE users SET fname=? WHERE username=?");
		$stmt->bind_param("ss", $new_fname, $username);
		$stmt->execute();
		echo ("first name changed successfully");
	}

	
	// user changing last name
	if ($action == "changeLname"){

		$username = $data['username'];
		$new_lname = $data['lname'];

		$stmt = $conn->prepare("UPDATE users SET lname=? WHERE username=?");
		$stmt->bind_param("ss", $new_lname, $username);
		$stmt->execute();
		echo ("last name changed successfully");
	}

	if ($action = "editBio"){
		$username = $data['username'];
		$bio = $data['newBio'];
		
		$stmt = $conn->prepare("UPDATE users SET bio=? WHERE username=?");
		$stmt->bind_param("ss", $bio, $username);
		$stmt->execute();
		http_response_code(200);
	}

	$conn->close();
	exit();
}


if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$username = $_GET['username'];
	$stmt = $conn->prepare("SELECT bio FROM users WHERE username = ?");
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$result = $stmt->get_result();
	$bio = $result->fetch_all();
	echo json_encode($bio);
}

?>
