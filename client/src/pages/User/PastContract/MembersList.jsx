import { Avatar, Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { AuthContext } from "../../../context/auth-context";
import { useState, useContext, useEffect } from "react";

const MemberItem = ({name, isSelected }) => {
  return (
    <div className={`hover:bg-[#E8E9F4] cursor-pointer ${isSelected ? 'bg-[#E8E9F4]' : ''}`}>
      <Link to={`${name}`}>
        <Typography 
          variant='body1'
          fontWeight={isSelected ? 700 : 500}
          className="flex items-center gap-1 font-bold self-start"
        >
          {name}
          <GppGoodOutlinedIcon sx={{ fontSize: 18 }} />
        </Typography>
      </Link>
    </div>
  );
};

MemberItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default function MembersList() {
  const [partners, setPartners] = useState([]);
  const pathname = useLocation().pathname;
  const auth = useContext(AuthContext);

  useEffect(() => {
    // Fetch partners associated with the logged-in user from the PHP file
    const fetchPartners = async () => {
      try {
        const response = await fetch(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPastPartners.php?userID=${auth.username}`);
        const data = await response.json();
        setPartners(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, [auth.username]);

  return (
    <Stack mt={5} pl={1} spacing={2}>
      {partners.map((partner) => {
        const isSelected = pathname.includes(partner.id);
        return (
          <MemberItem
            {...partner}
          />
        );
      })}
    </Stack>
  );
}