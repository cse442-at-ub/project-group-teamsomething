
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";

import { NavLink, useLocation } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ProfileCard = ({name,username, description, buttonFunction, buttonText}
  ) => {

  const avatarBgColor = getRandomColor();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Stack spacing={2}>
            <Avatar sx={{ width: 150, height: 150,  fontSize: 50,  bgcolor: avatarBgColor}}>
            {(name.charAt(0)).toUpperCase()}
            </Avatar>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack>
                  <Typography fontSize={20} fontWeight={600}>{name}</Typography>
                  <Typography fontSize={14} fontWeight={600}>{username}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                </Stack>
              </Stack>
              <Typography fontSize={14} fontWeight={400}>{description}</Typography>
              
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              <Stack spacing={1} direction="column" alignItems="start">
              </Stack>
              <NavLink to="/Message">
                <Button onClick={buttonFunction} variant="contained">{buttonText}</Button>
              </NavLink>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

/*
const MatchesCard = () => {


  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>


      <Grid item xs={10}>
        <div className="flex justify-start items-start w-full h-full bg-[#E8E9F4]">
          <Box p={20}>


            <ProfileCard 
              name="Samantha Bowen"
              username="21"
              description="I&apos;m an active enthusiast with a passion for fitness that extends beyond the gym. When I&apos;m not breaking a sweat, you can often find me exploring vibrant hiking trails, challenging myself to conquer new peaks, or enjoying serene yoga sessions in the great outdoors. I relish in organizing group fitness activities with my friends, whether it&apos;s a weekend hike followed by a picnic at a scenic lookout or an impromptu yoga session in a peaceful park."
            />
            <Box p={2}/>

            <ProfileCard 
              name="Jaden Smith"
              username="22"
              description="I am currently in search of a study partner who shares my commitment to academic success. Together, we can collaborate on coursework, review materials, and provide each other with valuable insights to enhance our learning experiences. If you're dedicated to achieving academic excellence and looking for a like-minded study companion, I'd love to connect with you.
              "
            />
             <Box p={2}/>
            <ProfileCard
              name="Lindsey Dunne"
              username="27"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus sem vitae tortor mollis rhoncus. Vivamus ac felis ac libero consequat consequat gravida ac ante. Suspendisse semper leo quis elementum convallis. Aliquam efficitur felis lacus. Duis sit amet libero at tortor posuere lacinia a non urna. Praesent sed malesuada magna. Sed nec tortor vitae orci bibendum eleifend et et nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate ante eget diam consectetur facilisis. Proin ac egestas erat. Vestibulum urna nisl, consequat id gravida non, aliquet a ante."
            />
            
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
*/

export default ProfileCard;
