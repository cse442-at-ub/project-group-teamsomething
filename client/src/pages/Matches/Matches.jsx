import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MatchesCard from "../../components/MatchesCard/MatchesCard.jsx";
import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav";

const Matches = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={0}>
      {!isMobile && (
        <Grid item xs={2}>
          <SideDrawer />
        </Grid>
      )}

      <Grid item xs={12} md={isMobile ? 12 : 10}>
        <MatchesCard />
        {isMobile && <BottomTabNavigation />}
      </Grid>
    </Grid>
  );
};

export default Matches;