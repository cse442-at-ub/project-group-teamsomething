<?php
// Function to generate a random salt
function generateSalt() {
    return bin2hex(random_bytes(16));
}

// Function to register a new user
function registerUser($username, $password, $fname, $lname) {
    // Generate a random salt
    $salt = generateSalt();

    // Hash the password with the salt using SHA256
    $hashedPassword = hash('sha256', $salt . $password);

    // Store the user information in the database
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO users (username, salt, password_hash, fname, lname) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sss", $username, $salt, $hashedPassword, $fname, $lname);

    if ($stmt->execute()) {
        echo "User registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}

// Example usage
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    registerUser($username, $password, $fname, $lname);
}
?>