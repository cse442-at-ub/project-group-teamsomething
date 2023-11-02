import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Divider
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MatchesCard  from "./MatchesCard";
import Pf1 from "../../assets/MockPhoto1.png";
import Pf2 from "../../assets/MockPhoto2.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

const Matches = () => {
  const { pathname } = useLocation()
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      
      
      <Grid item xs ={10}>
      <div className="flex justify-start items-start w-full h-full bg-[#E8E9F4]">
        <Box p={20}>
        
        
        <Card>
          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Stack spacing={2}>
                  <img
                    src={Pf1}
                    className="w-[150px] h-[150px] object-cover object-top borderRadius: '10px'"
                  />
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
                  
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Stack spacing={2}>
              

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Stack>
                      <Typography fontSize={20} fontWeight={600}>
                        Lindsey Dun
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
                    
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Stack>
                      <Typography fontSize={14} fontWeight={600}>
                        Pal Reviews
                      </Typography>
                      
                    </Stack>
                  </Stack>
                  <Box sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '10px' }} p={2} >
                    <Typography fontSize={14} fontWeight={400} sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '5px' }}>
                    From the moment we embarked on this path, Samantha&apos;s unwavering 
                    commitment and support have been nothing short of remarkable for me.
                    One of the most outstanding qualities of my accountability partner 
                    is their consistency. Whether it's early morning workouts, midday 
                    meal prepping, or evening yoga sessions, they never miss a beat...
                      
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0} textAlign="center" >
                      - Danny, 22
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0}>
                      Partner with Danny for 2 Months
                    </Typography>
                  </Box>
                  
                  
                </Stack>
                
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={3} justifyContent="space-between" height="100%">
                  <Stack spacing={1} direction="column" alignItems="start">
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
                <NavLink to="/Message">
                <Button variant="contained">
                        Accept Match
                </Button>
                </NavLink>
                </Stack>
                
              </Grid>
            </Grid>
            
              
            
          </CardContent>
        </Card>
        <Box p= {2}/>
        <Card>
          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Stack spacing={2}>
                  <img
                    src={Pf2}
                    className="w-[150px] h-[150px] object-cover object-top border borderRadius: '10px'"
                  />
                  <Stack spacing={1} direction="row">
                    <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                    <Stack>
                      <Typography fontSize={16} fontWeight={400}>
                        Total waggered
                      </Typography>
                      <Typography fontSize={16} fontWeight={600}>
                        $460
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
                        12 Months
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
                        5/2
                      </Typography>
                    </Stack>
                  </Stack>
                  <Box py={2} />
                  
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Stack spacing={2}>
              

                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Stack>
                      <Typography fontSize={20} fontWeight={600}>
                        Jaden Smith
                      </Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Bayonne - New Jersey
                      </Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        Age: 22
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                      
                    </Stack>
                  </Stack>
                  <Typography fontSize={14} fontWeight={400}>
                  I am currently in search of a study partner who shares my commitment to academic success. Together, we can collaborate on coursework, review materials, and provide each other with valuable insights to enhance our learning experiences. If you're dedicated to achieving academic excellence and looking for a like-minded study companion, I'd love to connect with you.
                    
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Stack>
                      <Typography fontSize={14} fontWeight={600}>
                        Pal Reviews
                      </Typography>
                      
                    </Stack>
                  </Stack>
                  <Box sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '10px' }} p={2} >
                    <Typography fontSize={14} fontWeight={400} sx={{ background: ['#E0F6DC'], padding: '10px', borderRadius: '5px' }}>
                    Our one-month study partnership has proven to be incredibly effective! We've efficiently tackled coursework, shared valuable insights, and motivated each other to excel academically. I look forward to continuing this fruitful collaboration.
                      
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0} textAlign="center" >
                      - Layla, 21
                    </Typography>
                    <Typography fontSize={14} fontWeight={400} fontStyle="italic" mt={0}>
                      Partner with Layla for 3 Months
                    </Typography>
                  </Box>
                  
                  
                </Stack>
                
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={3} justifyContent="space-between" height="100%">
                  <Stack spacing={1} direction="column" alignItems="start">
                    <Stack spacing={1} direction="row" alignItems="center">
                      <PaidOutlinedIcon sx={{ fontSize: 30 }} />
                      <Typography fontSize={16} fontWeight={600}>
                        Wager: $100
                      </Typography>
                  </Stack>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <AccessAlarmsOutlinedIcon sx={{ fontSize: 30 }} />
                    <Typography fontSize={16} fontWeight={600}>
                      3 Months
                    </Typography>
                  </Stack>
                </Stack>
                <NavLink to="/Message">
                <Button variant="contained">
                        Accept Match
                </Button>
                </NavLink>
                </Stack>
                
              </Grid>
            </Grid>
            
              
            
          </CardContent>
        </Card>
      </Box> 
      
      </div>
      
      
    </Grid>
      
    </Grid>
  );
};

export default Matches;
