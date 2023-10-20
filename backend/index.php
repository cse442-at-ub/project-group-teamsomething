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

function loginUser($username, $password) {
    // Path to the local text file
    $filePath = 'users.txt';

    // Read user data from the text file
    $users = file($filePath, FILE_IGNORE_NEW_LINES);

    foreach ($users as $user) {
        list($storedUsername, $hashedPassword) = explode(':', $user);
        
        if ($username === $storedUsername && password_verify($password, trim($hashedPassword))) {
            $_SESSION["username"] = $username; // Store the username in the session
            return "Login successful!";
        }
    }

    return "User not found or incorrect password.";
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
    $loginResult = loginUser($username, $password);
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
    $username = $data['fname'] ?? '';
    $password = $data['lname'] ?? '';

    // Path to the local text file where user data is stored
    $filePath = 'users.txt';

    // connect to db
    $conn = new mysqli("oceanus.cse.buffalo.edu", "eriklich", "teamsomething", "cse442_2023_fall_team_x_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

	$sql = "SELECT username FROM users";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {  
			if ($username === $row["username"]){
				$response->getBody()->write(json_encode(['message' => 'Username already registered']));
				return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
			}
			
	$stmt = $conn->prepare("INSERT INTO users (username, salt, password_hash, fname, lname) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sss", $username, $salt, $hashedPassword, $fname, $lname);



  }
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Store the user data in the text file
    $userLine = $username . ':' . $hashedPassword . PHP_EOL;
    file_put_contents($filePath, $userLine, FILE_APPEND);

    // Return a success response
    $response->getBody()->write(json_encode(['message' => 'Registration successful']));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
?>
