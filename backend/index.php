<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$app = AppFactory::create();

$app->addBodyParsingMiddleware();

$app->get('/', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("Hello, World!");
    return $response;
});

function verifyUser($username, $password) {
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT password_hash FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows === 1) {
            $stmt->bind_result($storedPasswordHash);
            $stmt->fetch();

            // Use password_verify to check the provided password against the stored hash
            if (password_verify($password, $storedPasswordHash)) {
                return true; // Passwords match
            }
        }
    }

    return false; // User not found or password doesn't match
}

$app->options('/login', function (Request $request, Response $response) {
    return $response->withStatus(200);
});

$app->options('/register', function (Request $request, Response $response) {
    return $response->withStatus(200);
});


$app->post('/login', function (Request $request, Response $response, array $args) {
    if($request === 'OPTIONS'){
        return $response->withStatus(200);
    }
    $data = $request->getParsedBody();
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $loginResult = verifyUser($username, $password);
    echo $loginResult;
    $response->getBody()->write(json_encode(['message' => $loginResult]));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/register', function (Request $request, Response $response, array $args) {
    if ($request === 'OPTIONS') {
        return $response->withStatus(200);
    }

    $data = $request->getParsedBody();
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';
    $fname = $data['fname'] ?? '';
    $lname = $data['lname'] ?? '';

    // Path to the local text file where user data is stored
    $filePath = 'users.txt';

    // connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // check username isn't already registered
	$sql = "SELECT username FROM users";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {  
			if ($username === $row["username"]){
				$response->getBody()->write(json_encode(['message' => 'Username already registered']));
				return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
			}
        }
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // insert into db
	$stmt = $conn->prepare("INSERT INTO users (username, hashedPassword, fname, lname) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sss", $username, $salt, $hashedPassword, $fname, $lname);

    // Return a success response
    $response->getBody()->write(json_encode(['message' => 'Registration successful']));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
?>