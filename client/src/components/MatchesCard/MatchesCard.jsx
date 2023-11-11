import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Lock from "../../assets/lock1.png";
import { Grid } from "@mui/material";

const PartnerRequestsURL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPartnerRequests.php";
const acceptPartnerURL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/AcceptPartnerRequest.php";

const MatchesCard = () => {
  const [partners, setPartners] = useState([]);
  const auth = useContext(AuthContext);
  const { login } = useContext(AuthContext)

  useEffect(() => {
    if (auth.username) {
      fetchPartners();
    }
  }, [auth.username]);

  const acceptFriendRequest = async (uname) => {
    console.log(auth.partner)
    try {
      const response = await axios.post(acceptPartnerURL, {
        requester_username: auth.username,
        receiver_username: uname,
      });
      console.log(response.data);
      // Refresh the list of partner requests after accepting
      fetchPartners();
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await axios.post(PartnerRequestsURL, {
        username: auth.username,
      });
      console.log(response.data);
      setPartners(response.data.data);
    } catch (error) {
      console.error("Error fetching partner data:", error);
    }
  };

  return (
    <div className="w-full p-4">
      {partners.length > 0 ? (
        partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md w-full overflow-hidden mb-4"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {partner.requester_username} wants to connect.
              </h3>
              <p className="text-gray-600 mb-4">Status: {partner.status}</p>
              <button
                onClick={() => acceptFriendRequest(partner.requester_username)}
                className="bg-[#FF3737] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Accept Friend
              </button>
            </div>
          </div>
        ))
      ) : (
      <Grid container spacing={0}>
      
      <Grid item xs={12}>
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center mb-12">
            <img src={Lock} className=" h-10 w-10"></img>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className=""> </p>
            </div>            
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p className="">You Currently Do Not Have A Match Request! </p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">Head to the partners tab to send match requests</p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">Check back here later to view an incoming request.</p>
            </div>
            <div className="font-['Kanit'] text-xl leading-[normal] font-light text-center text-black h-6">
              <p whitespace-pre-wrap absolute className="">Good Luck with your Search!  </p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
      )}
    </div>
  );
};

export default MatchesCard;
