import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { AuthContext } from "../../../context/auth-context";
import axios from "axios";
import React, { useState, useEffect, useContext } from 'react';
import { Avatar } from "@mui/material";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

const profilepicUrl =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";


export default function DescriptionHelper() {
  const [profilePic, setProfilePic] = useState(null);
  const auth = useContext(AuthContext);
  const username = auth.username

  useEffect(() => {
    const fetchProfilePic = async () => {
      try {
        const response = await axios.get(profilepicUrl, {
          params: { username: auth.username }
        });
        if (response.data && response.data.image) {
          const imageUrl = `data:image/jpeg;base64,${response.data.image}`;
          setProfilePic(imageUrl);
        } else {
          console.error('No image found:', response.data);
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };
    if (auth.username) {
      fetchProfilePic();
    }
  }, [auth.username]);

  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
  };

  return (
    <Box p={5}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Stack spacing={2}>
                {profilePic ? (
                  <img
                    src={profilePic}
                    className="w-[150px] h-[150px] object-cover object-top"
                    alt="Profile"
                  />
                ) : (
                  <Avatar
                    sx={{
                      bgcolor: stringToColor(auth.username),
                      width: 75,
                      height: 75,
                      fontSize: '2rem',
                      marginRight: 2,
                    }}
                  >
                    {auth.username.charAt(0).toUpperCase()}
                  </Avatar>
                )}
                <Stack spacing={1} direction="row">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total waggered
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      $300
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={1} direction="row">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Total time
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      7 Months
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={1} direction="row">
                  <GpsFixedOutlinedIcon sx={{ fontSize: 30 }} />
                  <Stack>
                    <Typography fontSize={16} fontWeight={400}>
                      Goal Met/Failed
                    </Typography>
                    <Typography fontSize={16} fontWeight={600}>
                      6/1
                    </Typography>
                  </Stack>
                </Stack>
                <Box py={2} />
                <Stack spacing={1} direction="row" alignItems="center">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    Wager: $70
                  </Typography>
                </Stack>
                <Stack spacing={1} direction="row" alignItems="center">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>
                    2 Months
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={9}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Stack>
                    <Typography fontSize={20} fontWeight={600}>
                      {auth.fname} {auth.lname}
                    </Typography>
                    <Typography fontSize={14} fontWeight={600}>
                      Queens - New York
                    </Typography>
                    <Typography fontSize={14} fontWeight={600}>
                      Age: 21
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                    <Typography fontSize={12} fontWeight={300} color="blue">
                      Verified Pal
                    </Typography>
                  </Stack>
                </Stack>
                <Typography fontSize={14} fontWeight={400}>
                  I&apos;m an active enthusiast with a passion for fitness that
                  extends beyond the gym. When I&apos;m not breaking a sweat,
                  you can often find me exploring vibrant hiking trails,
                  challenging myself to conquer new peaks, or enjoying serene
                  yoga sessions in the great outdoors. I relish in organizing
                  group fitness activities with my friends, whether it&apos;s a
                  weekend hike followed by a picnic at a scenic lookout or an
                  impromptu yoga session in a peaceful park. <br />
                  Aside from my fitness adventures, I also enjoy diving into the
                  world of makeup artistry. I&apos;ve honed my skills over time
                  and love experimenting with various makeup looks, from natural
                  and minimalistic to bold and dramatic. Some of my most
                  cherished moments involve hosting makeup parties with friends,
                  where we exchange tips and tricks, try out different styles,
                  and share laughter over the occasional makeup mishap. <br />
                  As someone who values both physical and creative pursuits, I
                  find the perfect balance between sweating it out and
                  expressing myself through the art of makeup. Whether I&apos;m
                  embarking on a new hiking trail with friends or hosting a
                  makeup soirée at home, my life is a delightful blend of
                  adventure and artistic expression. <br />
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Stack mt={3}>
            <Button sx={{ alignSelf: "flex-end" }} variant="contained">
              Edit Profile
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
