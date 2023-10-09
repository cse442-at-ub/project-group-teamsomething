import { Grid } from "@mui/material";
import React from "react";

import SideDrawer from "../../components/SideDrawer/SideDrawer";

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={10}>
        <div className="flex justify-center items-center w-full h-full bg-[#FED99B]">
          <div className="flex flex-col justify-center items-center mb-12">
            <img src="../../assets/" className="rounded-full h-10 w-10"></img>
            <div className="rounded-md bg-[#FF3737] w-80 h-10 mb-12">
              <p className="">How's the progress for the day?</p>
            </div>
            <div className="rounded-md bg-[#662c91] w-80 h-10">
              <p className="">Progress towards goal</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;