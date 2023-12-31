import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Avatar } from "@mui/material";

import Logo from "../../assets/logo.png";
import Home from "../../assets/Home.png";
import Partner from "../../assets/Partner.png";
import Messages from "../../assets/Messages.png";
import Matches from "../../assets/Matches.png";

import { AuthContext } from "../../context/auth-context";


const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
};

const SideDrawer = () => {
  const { pathname } = useLocation();
  const auth = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    if (auth.username) {
      const profilePicUrl = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";

      axios.get(profilePicUrl, {
        params: {
          username: auth.username // Pass the username as a parameter
        }
      })
      .then(response => {
        // The PHP script returns a base64 encoded image
        if (response.data.image) {
          setProfilePic(response.data.image);
        }
      })
      .catch(error => {
        console.error('Error fetching profile picture:', error);
      });
    }
  // Include auth.username in the dependency array to refetch when it changes
  }, [auth.username]);

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
          {auth.partner ? (
            <>
              {/* Message */}
              <NavLink to="/partners-blocked">
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
            </>
          ) : (
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
          )}

          {/* matches */}
          {auth.partner ? (
            <>
              {/* Message */}
              <NavLink to="/partners-blocked">
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
            </>
          ) : (
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
          )}

          {auth.partner ? (
            <>
              {/* Message */}
              <NavLink to="/message">
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
            </>
          ) : (
            <NavLink to="/message-blocked">
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
          )}
        </ul>

        <div className="">
          <NavLink to="/profile">
            <div
              className={`flex flex-row items-center ${
                pathname.includes("/home/user") ? "bg-[#E8E9F4]" : ""
              } hover:cursor-pointer hover:bg-[#E8E9F4] p-5 hover:rounded-tl-lg hover:rounded-bl-lg`}
            >
               {profilePic ? (
                  <img
                    src={`data:image/jpeg;base64,${profilePic}`}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                ) : (

                  <Avatar
                    sx={{
                      bgcolor: stringToColor(auth.username),
                      width: 48,
                      height: 48,
                      marginRight: 2,
                    }}
                  >
                    {auth.username[0].toUpperCase()}
                  </Avatar>
                )}
              <div className="flex flex-col">
                <p id="userNameReal" className="text-xs font-semibold">{auth.username}</p>
                <p id="fullName" className="text-xs font-medium">
                  {auth.fname} {auth.lname}
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
