import { Grid } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import MembersList from "./MembersList";
import { Outlet } from "react-router-dom";

const PastContract = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8} overflow='scroll' maxHeight={'100vh'}>
        <Grid container height='100%'>
          <Grid height='100%' item xs={3}>
            <MembersList />
          </Grid>
          <Grid height='100%' item xs={9} p={5} className="flex bg-[#E8E9F4]">
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PastContract;
