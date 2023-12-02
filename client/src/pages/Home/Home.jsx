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
import { Scheduler } from '@aldabil/react-scheduler';
import { Outlet } from 'react-router-dom';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import GoalComponent from '../../components/CurrentGoal/GoalComponent';
import { AuthContext } from '../../context/auth-context';

import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav"

const EVENTS = [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    disabled: true,
    admin_id: [1, 2, 3, 4],
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2,
    color: "#50b500",
  },
  {
    event_id: 3,
    title: "Event 3",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 1,
  },
  {
    event_id: 4,
    title: "Event 4",
    start: new Date(
      new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2,
    color: "#900000",
  },
  {
    event_id: 5,
    title: "Event 5",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2,
  },
  {
    event_id: 6,
    title: "Event 6",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() - 4
      )
    ),
    end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
    admin_id: 2,
  },
];

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
          <Grid item xs={3}>
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
          <Grid item xs={9} height="100%">
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
                <Box flex={1} overflow="scroll">
                  <Scheduler
                    ref={calendarRef}
                    deletable={false}
                    draggable={false}
                    editable={false}
                    disableViewNavigator={true}
                    events={EVENTS}
                    height={300}
                    week={{
                      weekDays: [0, 1, 2, 3, 4, 5, 6],
                      weekStartOn: 6,
                      startHour: 0,
                      endHour: 24,
                      step: 30,
                    }}
                    view="week"
                  />
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {isMobile && <BottomTabNavigation />}
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
