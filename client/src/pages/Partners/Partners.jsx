import { Grid } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import PartnerCard from "../../components/PartnerCard/PartnerCard.jsx";

const Partners = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>

      <Grid item xs={10}>
        <PartnerCard />
      </Grid>
    </Grid>
  );
};

export default Partners;