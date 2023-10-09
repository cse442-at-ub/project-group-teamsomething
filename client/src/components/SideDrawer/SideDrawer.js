import React from "react";
import { NavLink } from "react-router-dom";

import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

import Logo from "../../assets/logo.png";

const SideDrawer = () => {
  return (
    <>
      <div className="h-screen flex flex-1 flex-col">
        {/* Logo */}
        <div className="flex flex-row justify-center items-center p-2 mt-4">
          <img src={Logo} className="w-5 h-5"></img>
          <span className="text-[#EA4335]">Oathopal</span>
        </div>

        {/* Navigation */}
        <ul className="list-none w-full h-full flex flex-col">
          {/* Home */}
          <NavLink to="/protected">
            <li
              className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md flex"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
                marginRight: "calc(0.5vw + 0.5vh)",
              }}
            >
              <HomeIcon
                style={{
                  marginRight: "calc(0.5vw + 0.5vh)",
                  fontSize: "calc(1.5vw)",
                }}
              />
              <div className="font-semibold" style={{ fontSize: "calc(1vw)" }}>
                Home
              </div>
            </li>
          </NavLink>

          {/* Partner */}
          <NavLink to="/protected">
            <li
              className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md flex"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
                marginRight: "calc(0.5vw + 0.5vh)",
              }}
            >
              <HandshakeIcon
                style={{
                  marginRight: "calc(0.5vw + 0.5vh)",
                  fontSize: "calc(1.5vw)",
                }}
              />
              <div className="font-semibold" style={{ fontSize: "calc(1vw)" }}>
                Partner
              </div>
            </li>
          </NavLink>

          {/* Messages */}
          <NavLink to="/protected">
            <li
              className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md flex"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
                marginRight: "calc(0.5vw + 0.5vh)",
              }}
            >
              <MessageIcon
                style={{
                  marginRight: "calc(0.5vw + 0.5vh)",
                  fontSize: "calc(1.5vw)",
                }}
              />
              <div className="font-semibold" style={{ fontSize: "calc(1vw)" }}>
                Messages
              </div>
            </li>
          </NavLink>

          {/* Streak */}
          <NavLink to="/protected">
            <li
              className="hover:cursor-pointer hover:bg-blue-500 hover:rounded-md flex"
              style={{
                padding: "calc(0.5vw + 0.5vh)",
                marginLeft: "calc(0.5vw + 0.5vh)",
                marginRight: "calc(0.5vw + 0.5vh)",
              }}
            >
              <PublishedWithChangesIcon
                style={{
                  marginRight: "calc(0.5vw + 0.5vh)",
                  fontSize: "calc(1.5vw)",
                }}
              />
              <div className="font-semibold" style={{ fontSize: "calc(1vw)" }}>
                Streak
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;