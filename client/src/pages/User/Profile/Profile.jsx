import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import ProfileHelper from "./ProfileHelper";
import BottomTabNavigation from "../../../components/BottomTabNav/BottomTabNav"; // Adjust the import path as needed

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={0}>
      {!isMobile && (
        <Grid item xs={2}>
          <SideDrawer />
        </Grid>
      )}

      <Grid item xs={isMobile ? 12 : 2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={isMobile ? 12 : 8}>
        <ProfileHelper />
      </Grid>

      {isMobile && <BottomTabNavigation />}
    </Grid>
  );
};

export default Profile;
