import React, { useContext, useEffect, useState } from "react";
import { Grid, Avatar } from "@mui/material";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Lock from "../../assets/lock1.png";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";

const stringToColor = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
};


const Partner_Blocked = () => {

  const [partnerPic, setPartnerPic] = useState(null);
  const auth = useContext(AuthContext);
  const partner = auth.partner

  const profilepicUrl = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";

  useEffect(() => {
    if (auth.partner) {
      axios.get(profilepicUrl, { params: { username: auth.partner } })
        .then(response => {
          if (response.data && response.data.image) {
            const imageUrl = `data:image/jpeg;base64,${response.data.image}`;
            setPartnerPic(imageUrl);
          }
        })
        .catch(error => {
          console.error('Error fetching partner profile picture:', error);
        });
    }
  }, [auth.partner]);
  return (
<Grid container spacing={3}>
  <Grid item xs={12} md={2}>
    <SideDrawer />
  </Grid>
  <Grid item xs={12} md={10}>
    <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#662c91] to-[#662c91]">
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="flex items-center flex-grow bg-white rounded-lg shadow-md p-4 mb-6">
          {partnerPic ? (
            <img src={partnerPic} className="h-50 w-40 , mr-6 rounded-md shadow-md" alt="Partner Profile" />
          ) : (
            <Avatar sx={{ bgcolor: stringToColor(auth.partner), width: 75, height: 75, fontSize: '2rem', marginRight: 6 }}>
              {auth.partner ? auth.partner.charAt(0).toUpperCase() : ''}
            </Avatar>
          )}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {auth.partner}
            </h3>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="font-['Open Sans'] text-xl leading-[normal] font-light text-center text-black h-6">
            <p className="font-bold">
              You Currently are partnered with {auth.partner}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="font-['Open Sans'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className="">
                Finish Your Current Commitment
              </p>
            </div>
            <div className="font-['Open Sans'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className="">
                With Your Current Partner First Before Looking for a New One!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Grid>
</Grid>

  );
};

export default Partner_Blocked;
