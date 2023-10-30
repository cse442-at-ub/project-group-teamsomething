import { Grid, Button, Paper, Typography } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
