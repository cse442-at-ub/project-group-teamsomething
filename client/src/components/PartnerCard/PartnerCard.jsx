import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";

const cheshire2 =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPartners.php";

const requestPartnerURL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/sendPartnerRequest.php";

const PartnerCard = () => {
  // State to store the array of data from the API
  const [partners, setPartners] = useState([]);

  // Auth context to use authentication details if needed
  const auth = useContext(AuthContext);

  // The useEffect hook to perform the GET request on component mount
  useEffect(() => {
    axios
      .get(cheshire2)
      .then((response) => {
        // Handle the response by storing the data in state
        console.log(response.data);
        setPartners(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching partner data:", error);
      });
  }, []);

  const sendFriendRequest = async (uname) => {
    try {
      const response = await axios.post(requestPartnerURL, {
        sender: auth.username,
        receiver: uname,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching partner data:", error);
    }
  };

  // Render a list of cards with the data received or a loading message
  return (
    <div className="w-full p-4">
      {partners.length > 0 ? (
        partners.map((partner, index) => {
          // Skip rendering if partner.username is the same as auth.username
          if (partner.username === auth.username) {
            return null; // Don't render anything for this iteration
          }

          // Render the partner card for partners with a different username
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md w-full overflow-hidden mb-4"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {partner.fname} {partner.lname}
                </h3>
                <p className="text-gray-600 mb-4">{partner.username}</p>
                <button
                  onClick={() => sendFriendRequest(partner.username)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Request Friend
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PartnerCard;
