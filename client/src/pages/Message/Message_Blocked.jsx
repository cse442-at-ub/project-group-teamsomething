import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import axios from "axios";

import { AuthContext } from "../../context/auth-context";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Lock from "../../assets/lock1.png";
import { useTheme, useMediaQuery } from "@mui/material";

import BottomTabNavigation from "../../components/BottomTabNav/BottomTabNav";

const Message_Blocked = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { makePartner, removePartner } = useContext(AuthContext);
  const [pollingInterval, setPollingInterval] = useState(100);

  var getFriendshipStatusRoute =
    "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPartnershipStatus.php";

  useEffect(() => {
    getFriendshipStatus();
  }, []);

  const getFriendshipStatus = async () => {
    try {
      const response = await axios.post(getFriendshipStatusRoute, {
        username: auth.username,
      });
      console.log(response);
      if (response.data.partner != null) {
        makePartner(response.data.partner);
      } else {
        makePartner(null);
        navigate("/message-blocked");
      }
      console.log(auth.partner);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {!isMobile && (
        <Grid item xs={2}>
          <SideDrawer />
        </Grid>
      )}

      <Grid item xs={12} md={isMobile ? 12 : 10}>
        <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#662c91] to-[#662c91]">
          <div className="flex flex-col justify-center items-center mb-12 p-8 rounded-md shadow-md bg-white">
            <img src={Lock} className=" h-10 w-10"></img>
            <div className="font-['Open Sans'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className=""> </p>
            </div>
            <div className="font-['Open Sans'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className="font-bold">You Currently Do Not Have A Partner! </p>
            </div>
          </div>
        </div>

        {isMobile && (
          <Box position="fixed" bottom={0} left={0} right={0} zIndex={100}>
            <BottomTabNavigation />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Message_Blocked;
