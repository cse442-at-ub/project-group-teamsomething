import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

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

      {isMobile && <BottomTabNavigation />}
    </>
  );
};

export default Partners;
