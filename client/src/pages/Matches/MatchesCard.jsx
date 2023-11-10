
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";

import { NavLink, useLocation } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ProfileCard = ({name,username, description, buttonFunction, buttonText}
  ) => {

  const avatarBgColor = getRandomColor();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Stack spacing={2}>
            <Avatar sx={{ width: 150, height: 150,  fontSize: 50,  bgcolor: avatarBgColor}}>
            {(name.charAt(0)).toUpperCase()}
            </Avatar>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack>
                  <Typography fontSize={20} fontWeight={600}>{name}</Typography>
                  <Typography fontSize={14} fontWeight={600}>{username}</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <GppGoodOutlinedIcon sx={{ fontSize: 24 }} />
                </Stack>
              </Stack>
              <Typography fontSize={14} fontWeight={400}>{description}</Typography>
              
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={3} justifyContent="space-between" height="100%">
              <Stack spacing={1} direction="column" alignItems="start">
              </Stack>
              <NavLink to="/Message">
                <Button onClick={buttonFunction} variant="contained">{buttonText}</Button>
              </NavLink>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProfileCard;
