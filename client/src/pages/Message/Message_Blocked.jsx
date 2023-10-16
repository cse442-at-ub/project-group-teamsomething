import React from 'react'
import { Grid } from "@mui/material";


import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Lock from "../../assets/lock1.png";
import Pf1 from "../../assets/MockPhoto1.png";
const Message_Blocked = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>
      <Grid item xs={10}>
        <div className="flex justify-center items-center w-full h-full bg-[#E8E9F4]">
          <div className="flex flex-col justify-center items-center mb-12">
            <img src={Lock} className=" h-10 w-10"></img>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className=""> </p>
            </div>            
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className="">You Currently Have A Partner! </p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">Finish Your Current Commitment </p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">With Your Current Partner First </p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">Before Looking for a New One!  </p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Message_Blocked
