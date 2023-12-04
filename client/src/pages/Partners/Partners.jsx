import React from "react";
import { Grid, useTheme, useMediaQuery, Box } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav.jsx";
import PartnerCard from "../../components/PartnerCard/PartnerCard.jsx";

const Partners = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container spacing={0}>
        {!isMobile && (
          <Grid item xs={2}>
            <SideDrawer />
          </Grid>
        )}

        <Grid item xs={12} md={10}>
          <PartnerCard />
        </Grid>
      </Grid>

      {isMobile && (
        <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
          <BottomTabNavigation />
        </Box>
      )}
    </>
  );
};

export default Partners;
