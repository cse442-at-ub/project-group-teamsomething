import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";

const PartnerRequestsURL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPartnerRequests.php";

const MatchesCard = () => {
  const [partners, setPartners] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.post(PartnerRequestsURL, {
          username: auth.username,
        });
        console.log(response.data);
        // Set the partners with the new data from the response
        setPartners(response.data.data); // Assumes response.data.data is the array of partner requests
      } catch (error) {
        console.error("Error fetching partner data:", error);
      }
    };

    if (auth.username) {
      fetchPartners();
    }
  }, [auth.username]); // Dependency array includes auth.username

  // Define the sendFriendRequest function here, outside of your return statement
  const sendFriendRequest = async (username) => {
    // ...send friend request logic
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
                onClick={() => sendFriendRequest(partner.requester_username)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Accept Friend
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Loading or no friend requests...</div>
      )}
    </div>
  );
};

export default MatchesCard;
