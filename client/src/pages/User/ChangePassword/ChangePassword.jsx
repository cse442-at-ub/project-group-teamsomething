import { Grid } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import ChangePasswordHelper from "./ChangePasswordHelper"

const Description = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8}>
        <ChangePasswordHelper />
      </Grid>
    </Grid>
  );
};

export default Description;
