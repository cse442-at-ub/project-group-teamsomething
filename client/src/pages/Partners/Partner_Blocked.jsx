import React from "react";
import { Grid, useMediaQuery, useTheme, Box} from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav"; // Adjust the import path as needed
import Lock from "../../assets/lock1.png";

const Partner_Blocked = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={0} style={{ height: '100vh' }}>
      {!isMobile && (
        <Grid item xs={2}>
          <SideDrawer />
        </Grid>
      )}

      <Grid item xs={12}>
        <div className="flex flex-col justify-center items-center w-full h-full bg-[#E8E9F4]">
          <div className="flex flex-col justify-center items-center mb-12">
            <img src={Lock} alt="Lock" className="h-10 w-10" />
            <p className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black">
              You Currently Have A Partner!
            </p>
            <p className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black">
              Finish Your Current Commitment
            </p>
            <p className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black">
              With Your Current Partner First Before Looking for a New One!
            </p>
          </div>
        </div>
        {isMobile && (
          <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
            <BottomTabNavigation />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Partner_Blocked;
