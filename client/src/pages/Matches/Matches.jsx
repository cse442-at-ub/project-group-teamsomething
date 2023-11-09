import React from 'react'
import axios from "axios";
import { Grid,Button, Paper, Typography } from "@mui/material";
import MatchesComp from '../../components/matches.jsx'


import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MatchesCard  from "./MatchesCard";
import Pf1 from "../../assets/MockPhoto1.png";
import Pf2 from "../../assets/MockPhoto2.png";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

var cheshire = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {
  //const { pathname } = useLocation()
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      
      <Grid item xs={10}>
      <Typography variant="h5" gutterBottom>2 Matches Found!</Typography>
        <div id="yourMatches"  className="flex justify-center items-center w-full h-full bg-[#E8E9F4] font-kanit">
          
          <Paper style={{ padding: '20px', width: '80%' }}>
            <MatchesComp></MatchesComp>

          </Paper>
        </div> 
      </Grid>
    </Grid> 
    )
  }
        

export default Matches;
