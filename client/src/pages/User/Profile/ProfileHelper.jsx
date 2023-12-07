import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";

const profileUrl =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profile.php";

const profilepicUrl =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";

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
  const [bio, setBio] = useState('');
  const [bioLength, setBioLength] = useState(0);
  const [overLimit, setOverLimit] = useState(false);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        await axios.get(profileUrl, {
          params: {
          username: auth.username,
          action: "fetchBio"
          }
        }).then((response) => {
          console.log(response);
          setBio(response['data']);
          setBioLength(response['data'][0][0].length);
      })
      } catch (error) {
        console.error("Error fetching bio:", error);
      }
    }
    fetchBio();
  }, []);


  const changeBio = (e) => {
    if (bio.length < 300){
      setOverLimit(false);
    }
    else {
      setOverLimit(true);
    }
    setBio(e.target.value);
    setBioLength(bio.length);
  }

  const editBio = async (e) => {
    e.preventDefault();
    if (overLimit) {
      window.alert('bio too long');
      return}
    try {
      await axios.post(profileUrl, {
        newBio: bio,
        username: auth.username,
        action: "editBio"
      }).then((response) => {
        window.alert('bio changed successfully!');
    })
    } catch (error) {
      console.error("Error changing bio:", error);
    }
  };


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

  const handleProfilepic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilepic', file);
      formData.append('username', auth.username); // Send username along with the file
  
      // Call the function to upload the file
      uploadProfilePic(formData);
    }
  };

  const uploadProfilePic = async (formData) => {
    try {
      const response = await axios.post(profilepicUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
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
          <Stack
            direction="row"
            alignItems="flex-end"
            spacing={2}
            component="form"
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
                Edit Username
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

        {/* <Stack
          direction="row"
          alignItems="flex-end"
          spacing={2}
          component="form"
          onSubmit={editBio}
        >
          <Stack flex={3}>
            <Typography
              variant="h6"
              fontWeight="600"
              component="label"
              htmlFor="last-name"
            >
              Bio
            </Typography>
            <textarea
              variant="outlined"
              id="bio"
              value={bio}
              onChange={changeBio}
              rows={5}
              size="small"
              type="text"
              style={{backgroundColor: '#E8E9F4'}}
              required
            />
            <div>{bioLength}/300</div>
            {overLimit?<div>over character limit for bio!</div>:<></>}
          </Stack>
          <Box flex={1}>
            <Button variant="contained" fullWidth type="submit">
              Edit/Upload Bio
            </Button>
          </Box>
        </Stack> */}

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
