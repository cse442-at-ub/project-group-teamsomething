import { Grid } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/userSidebar/userSidebar";

const PartnerReview = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8}>
        <div>Partner Review</div>
      </Grid>
    </Grid>
  );
};

export default PartnerReview;
