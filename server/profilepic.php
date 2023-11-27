<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Function to establish a database connection
function connectToDatabase()
{
    $host = 'oceanus.cse.buffalo.edu';
    $username = 'eriklich';
    $password = 'teamsomething';
    $database = 'cse442_2023_fall_team_x_db';

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => "Connection failed: " . $conn->connect_error]);
        exit();
    }

    return $conn;
}

function uploadProfilePicture($conn, $username, $image)
{
    $checkStmt = $conn->prepare("SELECT * FROM profile_pictures WHERE username = ?");
    $checkStmt->bind_param("s", $username);
    $checkStmt->execute();
    $result = $checkStmt->get_result();
    if ($result->num_rows > 0) {

        $updateStmt = $conn->prepare("UPDATE profile_pictures SET image = ? WHERE username = ?");
        $null = NULL;
        $updateStmt->bind_param("bs", $null, $username);
        $updateStmt->send_long_data(0, $image);

        if ($updateStmt->execute()) {
            return ['message' => 'Profile picture updated successfully'];
        } else {
            return ['message' => 'Error updating profile picture: ' . $updateStmt->error];
        }
    }else{
        
        $stmt = $conn->prepare("INSERT INTO profile_pictures (username, image) VALUES (?, ?)");


        $null = NULL;
        $stmt->bind_param("sb", $username, $null);
        $stmt->send_long_data(1, $image);


        if ($stmt->execute()) {
            return ['message' => 'Profile picture uploaded successfully'];
        } else {
            return ['message' => 'Error uploading profile picture: ' . $stmt->error];
        }
    }
}

function getProfilePicture($conn, $username) {
    $stmt = $conn->prepare("SELECT image FROM profile_pictures WHERE username = ?");
    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error);
        return null;
    }

    $stmt->bind_param("s", $username);
    if (!$stmt->execute()) {
        error_log("Execute failed: " . $stmt->error);
        return null;
    }

    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        return base64_encode($row['image']);
    } else {
        error_log("No image found for username: " . $username);
        return null;
    }
}


switch ($_SERVER["REQUEST_METHOD"]) {
    case "GET":
        if (isset($_GET['username'])) {
            $username = $_GET['username'];
    
            $conn = connectToDatabase();
    
            $imageData = getProfilePicture($conn, $username);
    
            $conn->close();
    
            if ($imageData) {
                echo json_encode(['image' => $imageData]);
            } else {
                echo json_encode(['message' => 'No image found']);
            }
        } else {
            echo json_encode(['message' => 'Username not provided']);
        }
        break;

    case "POST":
        if (isset($_FILES['profilepic']) && isset($_POST['username'])) {
            $username = $_POST['username'];
            $image = file_get_contents($_FILES['profilepic']['tmp_name']);
    
            $conn = connectToDatabase();
    
            $response = uploadProfilePicture($conn, $username, $image);
    
            $conn->close();
    
            echo json_encode($response);
        } else {
            echo json_encode(['message' => 'Missing required parameters']);
        }
        break;

    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
    
}