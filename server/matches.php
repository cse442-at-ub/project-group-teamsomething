<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


// check if user has partner already, if so page should be blocked
function userTaken($username, $conn1){
	$sql = "SELECT partner FROM users WHERE username=?";
	$stmt = $conn1->prepare($sql);
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$result = $stmt->get_result();
	$partner = $result->fetch_assoc()["partner"];
	
	if (!is_null($partner)) { 
		return true; 
	}
	return false;
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
	$action = $data['action'];
	$p1 = $data['accepter'];


	// Connect to db
	$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

	// loading page, so check if user has partner, if they do block otherwise return available users
	if ($action == "load"){
		
		if (userTaken($p1, $conn)) {
				echo "user taken";
				exit();
			}

		// user doesn't have partner so load available users and send back to frontend
		$usernames = $conn->query("SELECT username FROM users")->fetch_all();
		echo json_encode($usernames);
		exit();
	}

	// User hit button to accept friend request
	else {
		$p2 = $data['accepted'];
		echo $accepter;
		echo $accepted;

		// check if partner got accepted by someone else already, if so send failure message back
		$sql = "SELECT partner FROM users WHERE username=?";
		$stmt = $conn->prepare($sql);
		$stmt->bind_param("s", $p2);
		$stmt->execute();
		$result = $stmt->get_result();
		$partner = $result->fetch_assoc()["partner"];
		// echo $partner . " is partner";
		if (!is_null($partner)) {
			echo "partner taken";
			exit();
		}
	
		$stmt = $conn->prepare("UPDATE users SET partner=? WHERE username=?");
		$stmt

		// set accepter's (user's) partner
		$stmt->bind_param("ss", $p1, $p2);
		$stmt->execute()

		// set accepted's partner 
		$p1 = $data['accepted']; 
		$p2 = $data['accepter'];
		$stmt->execute()

		$stmt->close();
		$conn->close();

		echo "fr accepted";
		exit();
	}

}

?>
