import { Stack } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Stack direction='row' height='100vh' py={2}>
      <Stack flex={2}>
        <SideDrawer />
      </Stack>
      <Stack flex={10}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Home;