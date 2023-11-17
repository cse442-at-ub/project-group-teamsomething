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
  const [name, setName] = useState("");
  const [username, setUsername] = useState(auth.username);
  useEffect(() => {
    axios.get(profileUrl).then((response) => console.log(response))
  }, [])

  const submitUsername = async (e) => {
    //e.preventDefault();
    try {
      await axios.post(profileUrl, {
        oldUsername: auth.username,
        newUsername: username,
        action: "changeUsername"
      }).then((response) => {
        sessionStorage.setItem("username", username); 
        location.reload();
        console.log(response);
      })
    } catch (error) {
      //console.log(username);
      console.log(auth.username);
      console.error("Error changing username:", error);
    }
  }

  const changeUsername = e => {
    setUsername(e.target.value);
  }

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
                onChange={changeUsername}
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
            onSubmit={handleEditName}
          >
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="name"
              >
                Name
              </Typography>
              <TextField
                variant="outlined"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
                type="text"
                required
              />
            </Stack>
            <Box flex={1}>
              <Button variant="contained" fullWidth type="submit">
                Edit Name
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
