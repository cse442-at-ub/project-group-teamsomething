<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
//require_once "matches.php";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
	$action = $data['action'];
	$p1 = $data['accepter'];
	$conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

	// loading page, so check if user has partner, if they do block otherwise return available users
	if ($action == "load"){
		// check if user already has partner
		//userTaken($p1, $conn);

		// user doesn't have partner so load available users and send back to frontend
		$free_users = array();
		$users = $conn->query("SELECT username, fname, lname FROM users WHERE partner IS NULL");

		if ($users->num_rows > 0) {
			while ($row = $users->fetch_assoc()) {
					if ($row["username"] != $p1) {
						array_push($free_users, $row);
					}
			}
		}

		echo json_encode($free_users);
	}

	/* User hit button to accept friend request
	else {
		$p2 = $data['accepted'];
		// check if partner taken
		userTaken($p2, $conn);
	
		$stmt = $conn->prepare("UPDATE users SET partner=? WHERE username=?");
		// set accepter's (user's) partner
		$stmt->bind_param("ss", $p1, $p2);
		$stmt->execute();
		// set accepted's partner 
		$p1 = $data['accepted']; 
		$p2 = $data['accepter'];
		$stmt->execute();

		$stmt->close();
		echo "fr accepted";
	}
	 */

	$conn->close();
	exit();
}

?>
