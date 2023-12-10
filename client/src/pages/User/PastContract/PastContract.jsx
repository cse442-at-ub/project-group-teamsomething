import React from "react";
import { Grid, useMediaQuery, useTheme, Box } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import MembersList from "./MembersList";
import { Outlet } from "react-router-dom";
import BottomTabNavigation from "../../../components/BottomTabNav/BottomTabNav";


const PastContract = () => {
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

      <Grid
        item
        xs={isMobile ? 12 : 8}
        sx={{ overflow: "auto", maxHeight: "100vh" }}
      >
        <Grid container height="100%">
          {isMobile ? (
            <Grid item xs={12}>
              <MembersList />
              <Outlet />
            </Grid>
          ) : (
            <>
              <Grid item xs={3}>
                <MembersList />
              </Grid>
              <Grid item xs={9} p={5} className="flex bg-[#E8E9F4]">
                <Outlet />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>

      {isMobile && (
        <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
          <BottomTabNavigation />
        </Box>
      )}
    </Grid>
  );
};

export default PastContract;
