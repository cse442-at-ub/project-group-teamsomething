import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
  OutlinedInput,
} from "@mui/material";

import { Avatar } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";

const DESCRIPTION_URL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/description.php";

const profilepicUrl =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";


export default function DescriptionHelper() {
  //const [profilePic, setProfilePic] = useState(null);
  //const auth = useContext(AuthContext);
  //const username = auth.username

  //useEffect(() => {
    //const fetchProfilePic = async () => {
      //try {
        //const response = await axios.get(profilepicUrl, {
          //params: { username: auth.username }
        //});
        //if (response.data && response.data.image) {
          //const imageUrl = `data:image/jpeg;base64,${response.data.image}`;
         // setProfilePic(imageUrl);
        //} else {
         // console.error('No image found:', response.data);
        //}
     // } catch (error) {
       // console.error('Error fetching profile picture:', error);
     // }
   // };
    //if (auth.username) {
   //   fetchProfilePic();
   // }
  //}, [auth.username]);

  //const stringToColor = (string) => {
   // let hash = 0;
   // for (let i = 0; i < string.length; i++) {
   //   hash = string.charCodeAt(i) + ((hash << 5) - hash);
  //  }
   // let color = '#';
   // for (let i = 0; i < 3; i++) {
    //  const value = (hash >> (i * 8)) & 0xff;
    //  color += `00${value.toString(16)}`.substr(-2);
   // }
   // return color;
  const [ editDescription, setEditDescription ] = useState(false);
  const auth = useContext(AuthContext);
  const [ description, setDescription ] = useState("");
  const [ wager, setWager ] = useState(0);

  const fetchDescription = useCallback(async () => {
    try {
      const response = await axios.get(DESCRIPTION_URL, {
        params: {
          username: auth.username
        }
      });
      // console.log(response.data);
      setDescription(response.data.description);
      setWager(response.data.wager);

    } catch (error) {
      console.error("Error fetching description data:", error);
    }
  }, [auth.username])

  const updateDescription = useCallback(async () => {
    try {
      const response = await axios.post(DESCRIPTION_URL, {
        username: auth.username,
        description: description,
        wager: wager
      });
      setDescription(response.data.description);
      setWager(response.data.wager);
    } catch (error) {
      console.error("Error updating description data:", error);
    }
  }
  , [auth.username, description, wager])

  const handleEditDescription = () => {
    if (editDescription) {
      updateDescription();
    }
    setEditDescription(!editDescription);
  }

  useEffect(() => {
    fetchDescription();
  }, [auth.username, editDescription, fetchDescription]);


  const renderTextAsHTML = (text) => {
    if (text === null) {
      return "";
    }
    const html = text.replace(/\n/g, '<p>');
    return html;
  };

  return (
    <Box p={5}>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            {/* <Grid item xs={1}>
              <Stack spacing={1}> */}
                {/* <img
                  src={TempProfilePic}
                  className="w-[150px] h-[150px] object-cover object-top"
                /> */}
                {/* <Stack spacing={1} direction="row">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total waggered
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      {userDetail.total_waggered ? userDetail.total_waggered : 0}
                    </Typography>
                  </Stack>
                </Stack> */}
                {/* <Stack spacing={1} direction="row">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total time
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      {userDetail.total_time ? userDetail.total_time + " months" : 0}
                    </Typography>
                  </Stack>
                </Stack> */}
                {/* <Stack spacing={1} direction="row">
                  <GpsFixedOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Goal Met/Failed
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                    {userDetail.goal_met ? userDetail.goal_met : 0}/
                    {userDetail.goal_failed ? userDetail.goal_failed : 0}
                    </Typography>
                  </Stack>
                </Stack> */}
                {/* <Box py={2} /> */}
                {/* <Stack spacing={1} direction="row" alignItems="center">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    Wager: ${userDetail.wager ? userDetail.wager : 0}
                  </Typography>
                </Stack> */}
                {/* <Stack spacing={1} direction="row" alignItems="center">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    {userDetail.wager_time ? userDetail.wager_time : 0} Months
                  </Typography>
                </Stack> */}
              {/* </Stack>
            </Grid> */}
            <Grid item xs={9}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <Stack>
                    <Typography fontSize={20} fontWeight={600}>
                      {auth.fname} {auth.lname}
                    </Typography>
                    {/* <Typography fontSize={14} fontWeight={600}>
                      {userDetail.address ? userDetail.address : 0}
                    </Typography>
                    <Typography fontSize={14} fontWeight={600}>
                      Age: {userDetail.age ? userDetail.age : 0}
                    </Typography> */}
                  </Stack>
                  
                  
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                    <Typography fontSize={12} fontWeight={300} color="blue">
                      Verified Pal
                    </Typography>
                  </Stack>
                </Stack>
                {
                    editDescription ?
                    <Stack spacing={1} direction="row" alignItems="center">
                      <PaidOutlinedIcon sx={{ fontSize: 30 }} />  
                      <Typography fontSize={16} fontWeight={600}>
                        Wager:
                      </Typography>
                      <OutlinedInput
                        id="wager-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label=""
                        defaultValue={wager}
                        size="small"
                        type="number"
                        onChange={(e) => setWager(e.target.value)}
                      />
                  </Stack>
                    :
                  <Stack spacing={1} direction="row" alignItems="center">
                    <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                    <Typography fontSize={16} fontWeight={600}>
                      Wager: ${wager ? wager : 0}
                    </Typography>
                  </Stack>
                  }
                {
                  editDescription ? 
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    minRows={4}
                    defaultValue={description}
                    sx={{
                      whiteSpace: "pre"
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                    variant="outlined"
                  />
                  :
                  <Typography fontSize={14} fontWeight={400} dangerouslySetInnerHTML={{__html:renderTextAsHTML(description)}}>
                  </Typography>
                }
              </Stack>
            </Grid>
          </Grid>
          <Stack mt={3}>
            <Button sx={{ alignSelf: "flex-end" }} variant="contained" onClick={handleEditDescription}>{editDescription ? "Save" : "Edit"} Profile</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
