To start the frontend:
- cd to client/
- run this command in the terminal "npm install && npm run dev"

backend:
- nothing to worry about: everything is uploaded into cheshire
- user: testa, pw: testa is a test account that works, register if needed

rm your cheshire files
- First make sure you are connected to UB's VPN or UB's campus wifi
- ssh <your_ubit_name>@cheshire.cse.buffalo.edu
- cd /web/CSE442-542/2023-Fall/cse-442x/
- ls

uploading to cheshire files
- cd to wherever your file is located at in your terminal
    - let's say you want to upload projectName/server/login.php to cheshire
    - Go to projectName
    - 'cd server'
- scp [file_name] <your_ubit_name>@cheshire.cse.buffalo.edu:/web/CSE442-542/2023-Fall/cse-442x/
- scp -r server zhaobint@cheshire.cse.buffalo.edu:/web/CSE442-542/2023-Fall/cse-442x/