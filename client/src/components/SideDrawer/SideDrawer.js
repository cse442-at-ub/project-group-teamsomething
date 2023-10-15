import React from "react";
import { NavLink } from "react-router-dom";

import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

import Home from "../../assets/Home.png";
import Partner from "../../assets/Partner.png";
import Messages from "../../assets/Messages.png";
import Matches from "../../assets/Matches.png";

import Logo from "../../assets/logo.png";

const SideDrawer = () => {
  return (
    <>
      <div className="h-screen flex flex-1 flex-col font-kanit">
        {/* Logo */}
        <div className="flex flex-row justify-center items-center p-2 mt-4">
          <img src={Logo} className="w-10 h-10 mr-1"></img>
          <span className="text-[#EA4335] text-2xl">Oathopal</span>
        </div>

        {/* Navigation */}
        <ul className="list-none w-full h-full flex flex-col">
          {/* Home */}
          <NavLink to="/home">
            <li
              className="hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg flex items-center"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
              }}
            >
              <img src={Home} className="w-6 h-6 mr-3" />
              <div className="font-extralight text-sm">Home</div>
            </li>
          </NavLink>

          {/* Partners */}
          <NavLink to="/partners">
            <li
              className="hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg flex p-5 items-center"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
              }}
            >
              <img src={Partner} className="w-6 h-6 mr-3" />
              <div className="font-extralight text-sm">Partners</div>
            </li>
          </NavLink>

          {/* matches */}
          <NavLink to="/matches">
            <li
              className="hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg flex p-5 items-center"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
              }}
            >
              <img src={Matches} className="w-6 h-6 mr-3" />
              <div className="font-extralight text-sm">Matches</div>
            </li>
          </NavLink>

          {/* Message */}
          <NavLink to="/Message">
            <li
              className="hover:cursor-pointer hover:bg-[#E8E9F4] hover:rounded-tl-lg hover:rounded-bl-lg flex p-5 items-center"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
              }}
            >
              <img src={Messages} className="w-6 h-6 mr-3" />
              <div className="font-extralight text-sm">Message</div>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;
