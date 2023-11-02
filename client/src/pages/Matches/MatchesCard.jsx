
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

import Pf1 from "../../assets/MockPhoto1.png";
import Pf2 from "../../assets/MockPhoto2.png";
import tempProfilePic from "../../assets/TempProfilePic.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

const ProfileCard = ({ imgSrc, wagered, time, goalsMet, goalsFailed, name, location, age, description, review, reviewer, reviewerage, partnershipDuration, wager, duration }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Stack spacing={2}>
              <img 
                src={imgSrc}
               className="w-[150px] h-[150px] object-cover object-top borderRadius: '10px'" 
               />
              <Stack spacing={1} direction="row">
                <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                <Stack>
                  <Typography fontSize={16} fontWeight={400}>Total wagered</Typography>
                  <Typography fontSize={16} fontWeight={600}>${wagered}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={1} direction="row">
                <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                <Stack>
                  <Typography fontSize={16} fontWeight={400}>Total time</Typography>
                  <Typography fontSize={16} fontWeight={600}>{time}</Typography>
                </Stack>
              </Stack>
              <Stack spacing={1} direction="row">
                <GpsFixedOutlinedIcon sx={{ fontSize: 30 }} />
                <Stack>
                  <Typography fontSize={16} fontWeight={400}>Goal Met/Failed</Typography>
                  <Typography fontSize={16} fontWeight={600}>{goalsMet}/{goalsFailed}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack>
                  <Typography fontSize={20} fontWeight={600}>{name}</Typography>
                  <Typography fontSize={14} fontWeight={600}>{location}</Typography>
                  <Typography fontSize={14} fontWeight={600}>Age: {age}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                </Stack>
              </Stack>
              <Typography fontSize={14} fontWeight={400}>{description}</Typography>
              <Box sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '10px' }} p={2} >
                <Typography fontSize={14} fontWeight={400} sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '5px' }}>{review}</Typography>
                <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0} textAlign="center">- {reviewer}, {reviewerage}</Typography>
                <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0}>Partner with {reviewer} for {partnershipDuration}</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              <Stack spacing={1} direction="column" alignItems="start">
                <Stack spacing={1} direction="row" alignItems="center">
                  <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>Wager: ${wager}</Typography>
                </Stack>
                <Stack spacing={1} direction="row" alignItems="center">
                  <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                  <Typography fontSize={16} fontWeight={600}>{duration}</Typography>
                </Stack>
              </Stack>
              <NavLink to="/Message">
                <Button variant="contained">Accept Match</Button>
              </NavLink>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

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
              imgSrc={Pf1}
              wagered="30"
              time="7 Months"
              goalsMet="6"
              goalsFailed="1"
              name="Lindsey Dun"
              location="Queens - New York"
              age="21"
              description="I&apos;m an active enthusiast with a passion for fitness that extends beyond the gym. When I&apos;m not breaking a sweat, you can often find me exploring vibrant hiking trails, challenging myself to conquer new peaks, or enjoying serene yoga sessions in the great outdoors. I relish in organizing group fitness activities with my friends, whether it&apos;s a weekend hike followed by a picnic at a scenic lookout or an impromptu yoga session in a peaceful park. <br /"
              review="From the moment we embarked on this path, Samantha&apos;s unwavering commitment and support have been nothing short of remarkable for me. One of the most outstanding qualities of my accountability partner is their consistency. Whether it's early morning workouts, midday meal prepping, or evening yoga sessions, they never miss a beat..."
              reviewer="Danny"
              reviewerage = "21"
              partnershipDuration="2 Months"
              wager="70"
              duration="2 Months"
            />
            <Box p={2}/>

            <ProfileCard 
              imgSrc={Pf2}
              wagered="460"
              time="12 Months"
              goalsMet="5"
              goalsFailed="2"
              name="Jaden Smith"
              location="Bayonne - New Jersey"
              age="22"
              description="I am currently in search of a study partner who shares my commitment to academic success. Together, we can collaborate on coursework, review materials, and provide each other with valuable insights to enhance our learning experiences. If you're dedicated to achieving academic excellence and looking for a like-minded study companion, I'd love to connect with you.
              "
              review="Our one-month study partnership has proven to be incredibly effective! We've efficiently tackled coursework, shared valuable insights, and motivated each other to excel academically. I look forward to continuing this fruitful collaboration.
              "
              reviewer="Layla"
              reviewerage = "24"
              partnershipDuration="3 Months"
              wager="100"
              duration="3 Months"
            />
             <Box p={2}/>
            <ProfileCard 
              imgSrc={tempProfilePic}
              wagered="215"
              time="4 Months"
              goalsMet="3"
              goalsFailed="6"
              name="Lindsey Dunne"
              location="Manhattan - New York"
              age="27"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus sem vitae tortor mollis rhoncus. Vivamus ac felis ac libero consequat consequat gravida ac ante. Suspendisse semper leo quis elementum convallis. Aliquam efficitur felis lacus. Duis sit amet libero at tortor posuere lacinia a non urna. Praesent sed malesuada magna. Sed nec tortor vitae orci bibendum eleifend et et nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate ante eget diam consectetur facilisis. Proin ac egestas erat. Vestibulum urna nisl, consequat id gravida non, aliquet a ante."
              review="Nulla venenatis nisl eget nibh rhoncus mattis id non turpis. Suspendisse condimentum leo sit amet dui pellentesque tincidunt. Suspendisse sit amet eros bibendum, imperdiet tellus ut, lacinia dui. Integer ac erat non ipsum maximus ullamcorper. Donec ligula libero, rutrum id ex in, semper feugiat enim."
              reviewer="Lindsey"
              reviewerage = "21"
              partnershipDuration="3 Months"
              wager="165"
              duration="1 Months"
            />
            
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default MatchesCard;
