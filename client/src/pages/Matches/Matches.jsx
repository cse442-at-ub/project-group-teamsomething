import React from "react";
import { Grid, Button, Paper, Typography } from "@mui/material";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import MatchesCard from "../../components/MatchesCard/MatchesCard.jsx";

var cheshire =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/matches.php";

const Matches = () => {
  //const { pathname } = useLocation()
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>

      <Grid item xs={10}>
        <MatchesCard />
      </Grid>
    </Grid>
  );
};

export default Matches;
