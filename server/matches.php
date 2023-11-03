<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
		}
		$usernames = $conn->query("SELECT username FROM users")->fetch_all();
		echo json_encode($usernames);
		exit();
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $p1 = $data['accepter'];
    $p2 = $data['accepted'];

		echo $accepter;
		echo $accepted;

    // Connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
		}

		// check if user has partner already, if so page should be blocked
		$sql = "SELECT partner FROM users WHERE username=?";
		$stmt = $conn->prepare($sql);
		$stmt->bind_param("s", $p1);
		$stmt->execute();
		$result = $stmt->get_result();
		$partner = $result->fetch_assoc()["partner"];
		// echo $partner . " is partner";
		if (!is_null($partner)) {
			echo "user has partner";
			exit();
		}

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
		if (!$stmt) {
        http_response_code(500);
        echo json_encode(['message' => "Statement preparation failed: " . $conn->error]);
        exit();
		}
		// set accepter's partner
		$stmt->bind_param("ss", $p1, $p2);
		if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
        exit();
    }

		// set accepted's partner 
		$p1 = $data['accepted']; 
		$p2 = $data['accepter'];
		if (!$stmt->execute()) {
        http_response_code(500);
        echo json_encode(['message' => "Statement execution failed: " . $stmt->error]);
        exit();
    }

		$stmt->close();
		$conn->close();

		echo "fr accepted";
    exit();
    }

?>
