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
          Home
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;