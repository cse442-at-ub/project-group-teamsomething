import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Grid,
  Box,
  Stack,
  Divider,
  Button,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import GoalComponent from '../../components/CurrentGoal/GoalComponent';
import { AuthContext } from '../../context/auth-context';


import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav"
import EventScheduler from './EventScheduler';



const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log(auth);
  }, []);

  const [editable, setEditable] = useState(false);
  const calendarRef = useRef(null);

  const handleEditable = () => {
    setEditable((current) => {
      calendarRef.current.scheduler?.handleState(
        !current ? true : false,
        "editable"
      );
      calendarRef.current.scheduler?.handleState(
        !current ? true : false,
        "draggable"
      );
      calendarRef.current.scheduler?.handleState(
        !current ? true : false,
        "deletable"
      );
      return !current;
    });
  };

  return (
    <Grid container spacing={0}>
       {!isMobile && (
        <Grid item xs={2}>
          <SideDrawer />
        </Grid>
      )}

      <Grid item xs={12} md={isMobile ? 12 : 10} height={'100vh'} className="bg-[#E8E9F4] p-5">
        <Grid container height="100%" spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              height="100%"
              overflow="hidden"
              bgcolor={"white"}
              borderRadius={3}
              p={2}
            >
              <GoalComponent />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={9} height="100%">
            <Stack height="100%">
              <Stack direction="row" alignItems="center" spacing={4}>
                <Box
                  component="span"
                  bgcolor="white"
                  p={2}
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: 3,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <h1 className="text-center font-bold">Schedule</h1>
                </Box>
              </Stack>
              <Stack
                flex={1}
                overflow="hidden"
                bgcolor={"white"}
                sx={{
                  borderRadius: 5,
                  borderTopLeftRadius: 0,
                }}
                p={5}
              >
                <Stack py={2} spacing={2} position="relative">
                  <Box
                    sx={{
                      position: "absolute",
                      top: -5,
                      left: "calc(50% - 25px)",
                      fontWeight: "bold",
                    }}
                  >
                    {new Date().toLocaleDateString()}
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={50}
                    max={100}
                  />
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleEditable}
                    >
                      {editable ? "Done Editing" : "Edit Schedule"}
                    </Button>
                    <Button variant="outlined" color="primary">
                      Edit Pal Time
                    </Button>
                  </Stack>
                </Stack>
                <Divider />
                <Box flex={1} overflow="auto" style={{ height: '100%', overflow: 'auto' }}>
                    <EventScheduler editable ref={calendarRef} />
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {isMobile && (
          <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
            <BottomTabNavigation />
          </Box>
        )}
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
