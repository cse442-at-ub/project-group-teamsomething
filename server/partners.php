<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
//require_once "matches.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);

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
		
		// check for duplicate requests
		$sql = "SELECT partner FROM partner_requests WHERE user=?";
		if($q = $conn->prepare($sql)) { // assuming $mysqli is the connection
			$q->bind_param('s', $user);
			$q->execute();
			$result = $q->get_result();
			if ($result){
				$p = $result->fetch_row()[0];
				if ($p == $partner){
					echo json_encode($p);
					echo "duplicate request";
					$conn->close();
					exit();
				}
			}
			// any additional code you need would go here.
		} else {
			$error = $q->errno . ' ' . $q->error;
			echo $error; // 1054 Unknown column 'foo' in 'field list'
		}
		$q->close();
		/*
		if ($stmt->error) {
			die("error in executing statement: " . $stmt->error);
		}
		if (!$stmt->execute()) {
        //http_response_code(500);
        //echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
				echo json_encode('error: ' . $stmt->error);
        exit();
    }
		//echo "erik";
		 */
	
		// add partner request to table
		if($stmt = $conn->prepare("INSERT INTO partner_requests (user, partner) VALUES (?, ?)")) { // assuming $mysqli is the connection
			$stmt->bind_param('ss', $user, $partner);
			$stmt->execute();
			// any additional code you need would go here.
		} else {
			$error = $stmt->errno . ' ' . $stmt->error;
			echo $error; // 1054 Unknown column 'foo' in 'field list'
		}

		$stmt->close();
		echo "good fr";
	}

	$conn->close();
	exit();
}

?>
