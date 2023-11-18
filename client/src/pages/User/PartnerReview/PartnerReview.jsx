import { Grid, Stack } from "@mui/material";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import UserSidebar from "../../../components/UserSidebar/UserSidebar";
import ReviewBox from "../../../components/UserReview/ReviewBox";


const PartnerReview = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={2}>
        <UserSidebar />
      </Grid>
      <Grid item xs={8} overflow='scroll' maxHeight={'100vh'}>
        <Stack p={3} spacing={3}>
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />

        </Stack>
      </Grid>
    </Grid>
  );
};

export default PartnerReview;

