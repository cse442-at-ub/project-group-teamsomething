import React from "react";
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";

import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import DescriptionHelper from "./DescriptionHelper";
import BottomTabNavigation from "../../../components/BottomTabNav/BottomTabNav";

const Description = () => {
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
        <DescriptionHelper />
      </Grid>

      {isMobile && (
        <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
          <BottomTabNavigation />
        </Box>
      )}
    </Grid>
  );
};

export default Description;
