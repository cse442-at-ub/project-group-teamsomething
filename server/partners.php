<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
//require_once "matches.php";


// check if user has partner already, if so page should be blocked
function userTaken($username, $dbConn){
	$sql = "SELECT partner FROM users WHERE username=?";
	$stmt = $dbConn->prepare($sql);
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$result = $stmt->get_result();
	$partner = $result->fetch_assoc()["partner"];
	
	if (!is_null($partner)) { 
		echo "user taken";
		$dbConn->close();
		exit();
	}
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
	$action = $data['action'];
	$user = $data['user'];
	$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

	// loading page, so check if user has partner, if they do block otherwise return available users
	if ($action == "load"){
		// check if user already has partner
		userTaken($user, $conn);

		// user doesn't have partner so load available users and send back to frontend
		$free_users = array();
		$users = $conn->query("SELECT username, fname, lname FROM users WHERE partner IS NULL");

		if ($users->num_rows > 0) {
			while ($row = $users->fetch_assoc()) {
					if ($row["username"] != $user) {
						array_push($free_users, $row);
					}
			}
		}

		echo json_encode($free_users);
	}

	// User hit button to accept friend request
	else {
		$partner = $data['partner'];
		// check if partner's been taken since page load
		userTaken($partner, $conn);
		// check if user's been accepted since page load
		userTaken($user, $conn);
	
		// add partner request to table
		$stmt = $conn->prepare("INSERT INTO partner_requests (user, partner) VALUES (?, ?)");
		$stmt->bind_param("ss", $user, $partner);
		$stmt->execute();

		$stmt->close();
		echo "good fr";
	}

	$conn->close();
	exit();
}

?>
