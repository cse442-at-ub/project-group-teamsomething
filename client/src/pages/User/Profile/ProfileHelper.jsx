import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";

const profileUrl =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profile.php";

export default function ProfileHelper() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [profilepic, setProfilepic] = useState(null);
  const [email, setEmail] = useState("");
  //const [changeEmail, setChangeEmail] = useState("");
  const [fname, setFname] = useState(auth.fname);
  const [username, setUsername] = useState(auth.username);
  const [lname, setLname] = useState(auth.lname); // New state for last name

  const submitUsername = async (e) => {
    e.preventDefault();
    try {
	  //e.preventDefault();
    console.log(auth.username);
      await axios.post(profileUrl, {
        oldUsername: auth.username,
        newUsername: username,
        action: "changeUsername"
      }).then((response) => {
        if (response['data']['message'] == "Username taken already"){
          window.alert("username already taken!");
        }
        else {
          window.alert("username changed!");
          document.getElementById("userNameReal").textContent = username; 
          document.getElementById("change-email").value = '';
          //e.preventDefault();
          //sessionStorage.setItem("username", username); 
          console.log(response);
          auth.username = username;
          //setUsername(username);
        }
      })
    } catch (error) {
      //console.log(username);
      console.error("Error changing username:", error);
    }
  };


  const editFname = async (e) => {
    console.log(auth.fname);
    e.preventDefault();
    try {
    e.preventDefault();
      await axios.post(profileUrl, {
        username: auth.username,
        fname,
        action: "changeFname"
      }).then((response) => {
        window.alert("first name updated!");
        document.getElementById("fullName").textContent = fname + ' ' + lname;
        document.getElementById("fname").value = '';
        e.preventDefault();
        sessionStorage.setItem("fname", fname); 
        console.log(response);
    })
    } catch (error) {
      console.error("Error changing first name:", error);
    }
  };


  const editLname = async (e) => {
    e.preventDefault();
    try {
    e.preventDefault();
      await axios.post(profileUrl, {
        username: auth.username,
        lname,
        action: "changeLname"
      }).then((response) => {
        window.alert("last name updated!");
        document.getElementById("fullName").textContent = fname + ' ' + lname;
        document.getElementById("lname").value = '';
        e.preventDefault();
       sessionStorage.setItem("lname", lname); 
        console.log(response);
    })
    } catch (error) {
      console.error("Error changing last name:", error);
    }
  };

  const handleProfilepic = (e) => {
    setProfilepic(e.target.files[0]);
  };

  
  const handleEditEmail = (e) => {
    e.preventDefault();
    //console.log(changeEmail);
  };
  

  const handleEditName = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Box p={5} maxWidth={800}>
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight="bold">
          Account Info
        </Typography>
        <Stack spacing={2} width={250}>
          <Box
            height={50}
            width={50}
            className="overflow-hidden rounded-[30px] relative border-2"
          >
            <img
              src={profilepic ? URL.createObjectURL(profilepic) : null}
              className="w-full h-full object-cover object-top"
            />
          </Box>
          <Button variant="contained" fullWidth>
            Edit Profile Picture
            <input
              type="file"
              className="opacity-0 absolute inset-0"
              onChange={handleProfilepic}
            />
          </Button>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="email"
              >
                Email
              </Typography>
              <TextField
                variant="outlined"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                type="email"
              />
            </Stack>
            <Box flex={1} />
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-end"
            spacing={2}
            component="form"
            onSubmit={handleEditEmail}
          >
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="change-email"
              >
                Change Username 
              </Typography>
              <TextField
                variant="outlined"
                id="change-email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="small"
                //type="email"
                required
              />
            </Stack>
            <Box flex={1}>
              <Button variant="contained" fullWidth type="submit" onClick={submitUsername}>
                Submit
              </Button>
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-end"
            spacing={2}
            component="form"
            onSubmit={editFname}
          >
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="name"
              >
                First Name
              </Typography>
              <TextField
                variant="outlined"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                size="small"
                type="text"
                required
              />
            </Stack>
            <Box flex={1}>
              <Button variant="contained" fullWidth type="submit">
                Edit First Name
              </Button>
            </Box>
          </Stack>
          <Stack
          direction="row"
          alignItems="flex-end"
          spacing={2}
          component="form"
          onSubmit={editLname}
        >
          <Stack flex={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              component="label"
              htmlFor="last-name"
            >
              Last Name
            </Typography>
            <TextField
              variant="outlined"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              size="small"
              type="text"
              required
            />
          </Stack>
          <Box flex={1}>
            <Button variant="contained" fullWidth type="submit">
              Edit Last Name
            </Button>
          </Box>
        </Stack>
          <Stack alignItems="flex-start" width={200} spacing={2}>
            <Button
              variant="contained"
              fullWidth
              LinkComponent={Link}
              to="/change-password"
            >
              Change Password
            </Button>
            <Button
              onClick={() => {
                logout();
                navigate("/");
              }}
              variant="contained"
              fullWidth
            >
              Log Out
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
