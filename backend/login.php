<?php
session_start();

// Function to verify the user's credentials
function verifyUser($username, $password) {
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT salt, password_hash FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows === 1) {
            $stmt->bind_result($salt, $storedPasswordHash);
            $stmt->fetch();

            // Hash the provided password with the retrieved salt and compare with stored hash
            $hashedPassword = hash('sha256', $salt . $password);

            if ($hashedPassword === $storedPasswordHash) {
                return true; // Passwords match
            }
        }
    }

    return false; // User not found or password doesn't match
}

// Handle user login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (verifyUser($username, $password)) {
        // Authentication successful, set session variable or redirect to a secure page
        $_SESSION["username"] = $username;
        header("Location: secure_page.php");
        exit();
    } else {
        $loginError = "Invalid username or password.";
    }
}
?>