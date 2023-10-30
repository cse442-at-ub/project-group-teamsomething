import React from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Pf1 from "../../assets/MockPhoto1.png";
import Pf2 from "../../assets/MockPhoto2.png";

const Matches = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>

      <Grid item xs={10}>
        <Typography variant="h5" gutterBottom>
          2 Matches Found!
        </Typography>
        <div className="flex justify-center items-center w-full h-full bg-[#E8E9F4] font-kanit">
          <Paper style={{ padding: "20px", width: "80%" }}>
            <Grid item xs={12}>
              <Grid item xs={10}>
                <div className="flex flex-row items-center hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg">
                  <img src={Pf1} className="w-12 h-12 object-cover mr-1"></img>
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">Jaden Smith</p>
                  </div>
                </div>
                <Typography variant="subtitle1">Queens- New York</Typography>
                <Typography variant="body1" style={{ marginRight: "0px" }}>
                  I'm an active enthusiast with a passion for fitness that
                  extends beyond the gym. When I'm not breaking a sweat, you can
                  often find me exploring vibrant hiking trails, challenging
                  myself to conquer new peaks, or enjoying serene yoga sessions
                  in the great outdoors. I relish in organizing group fitness
                  activities with my friends, whether it's a weekend hike ...
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container justifyContent="flex" alignItems="left">
                  <Grid item>
                    <Button variant="text">See Samantha's full profile</Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end" alignItems="right">
                  <Grid item>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#FF3737", color: "white" }}
                    >
                      Accept
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10}>
                <div className="flex flex-row items-center hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg">
                  <img src={Pf2} className="w-12 h-12 object-cover mr-1"></img>
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">Samantha Smith</p>
                  </div>
                </div>
                <Typography variant="subtitle1">Bayonne- New Jersey</Typography>
                <Typography variant="body1" style={{ marginRight: "0px" }}>
                  I am currently in search of a study partner who shares my
                  commitment to academic success. Together, we can collaborate
                  on coursework, review materials, and provide each other with
                  valuable insights to enhance our learning experiences. If
                  you're dedicated to achieving academic excellence and looking
                  for a like-minded study companion, I'd love to connect with
                  you.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container justifyContent="flex" alignItems="left">
                  <Grid item>
                    <Button variant="text">See Jaden's full profile</Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end" alignItems="right">
                  <Grid item>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#FF3737", color: "white" }}
                    >
                      Accept
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default Matches;
