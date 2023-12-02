import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Icon for Profile
import { useNavigate } from "react-router-dom";
import Matches from "../../assets/Matches.png";

const BottomTabNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate based on the tab selected
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/partners");
        break;
      case 2:
        navigate("/matches");
        break;
      case 3:
        navigate("/message");
        break;
      case 4:
        navigate("/profile");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Partners" icon={<PeopleIcon />} />
      <BottomNavigationAction
        label="Matches"
        icon={<img src={Matches} alt="Matches" className="w-6 h-6" />}
      />
      <BottomNavigationAction label="Messages" icon={<MessageIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default BottomTabNavigation;
