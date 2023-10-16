import React from 'react'
import { Grid,Button, Paper, Typography } from "@mui/material";


import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Pf1 from "../../assets/MockPhoto1.png";

const Matches = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={10}>
        <div className="flex justify-center items-center w-full h-full bg-[#E8E9F4]">
        <Paper style={{ padding: "20px", maxWidth: "600px" }}>
            <Typography variant="h5" gutterBottom>2 Matches Found!</Typography>
            
            
            <Grid container spacing={3} alignItems="center">
              
              <Grid item xs={10}>
                <Typography variant="h6">Samantha Smith</Typography>
               
                <Typography variant="body1" gutterBottom>
                  I'm an active enthusiast with a passion for...
                </Typography>
                <Button variant="text" color="primary">
                  See Samantha’s full profile
                </Button>
                <Button variant="contained" style={{backgroundColor: "#FF9500", color: "white", marginTop: '10px'}}>
                  Accept
                </Button>
              </Grid>
            </Grid>
            
            
            
          </Paper>
        </div> 
      </Grid>
    </Grid> 
    )
  }
        

export default Matches
