import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Home from "../../assets/Home.png";
import Partner from "../../assets/Partner.png";
import Messages from "../../assets/Messages.png";
import Matches from "../../assets/Matches.png";
import tempProfilePic from "../../assets/TempProfilePic.png";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";

const SideDrawer = () => {
  const { pathname } = useLocation()
  const auth = useContext(AuthContext);

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
        <div className="">
          <NavLink to="/profile">
            <div className={`flex flex-row items-center ${pathname.includes('/home/user') ? 'bg-[#E8E9F4]' : ''} hover:cursor-pointer hover:bg-[#E8E9F4] p-5 hover:rounded-tl-lg hover:rounded-bl-lg`}>
              <img
                src={tempProfilePic}
                className="w-12 h-12 object-cover mr-1"
              ></img>
              <div className="flex flex-col">
                <p className="text-xs font-semibold">{auth.username}</p>
                <p id="username" className="text-xs font-medium">
                  <label htmlFor=""></label>{auth.username}
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
