import { Grid, Button, Paper, Typography } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import { Outlet } from "react-router-dom";
import PartnersComp from '../../components/partners.jsx'

const Partners = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      <Stack flex={10}></Stack>
      <PartnersComp></PartnersComp>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Partners;
