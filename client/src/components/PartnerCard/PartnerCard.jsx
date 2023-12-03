import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import { Avatar } from "@mui/material";

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  

  return color;
}


const cheshire2 =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getPartners.php";

const requestPartnerURL =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/sendPartnerRequest.php";



const PartnerCard = () => {
  // State to store the array of data from the API
  const [partners, setPartners] = useState([]);
  const [partnerPics, setPartnerPics] = useState({});
  const [partnerDescriptions, setPartnerDescriptions] = useState({});
  const auth = useContext(AuthContext);

  const profilePicUrl = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/profilepic.php";
  const pfdescription = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/getdescription.php";


  // The useEffect hook to perform the GET request on component mount
  useEffect(() => {
    axios
      .get(cheshire2)
      .then((response) => {
        // Handle the response by storing the data in state
        
        setPartners(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error fetching partner data:", error);
      });
  }, []);

  useEffect(() => {
    partners.forEach(partner => {
      axios.get(profilePicUrl, { params: { username: partner.username } })
        .then(picResponse => {
          if (picResponse.data && picResponse.data.image) {
            setPartnerPics(prevPics => ({
              ...prevPics,
              [partner.username]: `data:image/jpeg;base64,${picResponse.data.image}`
            }));
          }
        })
        .catch(error => console.error("Error fetching profile picture:", error));
    });
  }, [partners]);

  useEffect(() => {
    partners.forEach(partner => {
      axios.get(pfdescription, { params: { username: partner.username } })
        .then(descResponse => {
          console.log("Description response for", partner.username, ":", descResponse.data);
          if (descResponse.data && descResponse.data.description) {
            setPartnerDescriptions(prevDescs => ({
              ...prevDescs,
              [partner.username]: descResponse.data.description
            }));
          } else {
            // Handle case where description is not present
            setPartnerDescriptions(prevDescs => ({
              ...prevDescs,
              [partner.username]: null
            }));
          }
        })
        .catch(error => console.error("Error fetching user description:", error));
    });
  }, [partners]);

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
          
          const partnerPic = partnerPics[partner.username];
          const descriptions = partnerDescriptions[partner.username];

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <div className= "flex items-center flex-grow">
                {partnerPic ? (
                  <img src={partnerPic} className="w-40 h-30 mr-12 object-cover" alt="Partner Profile" />
                ) : (
                  <Avatar
                    style={{ backgroundColor: stringToColor(partner.username), width: 100, height: 95, fontSize: 50 }}
                    className="m-10"
                  >
                    {partner.fname[0].toUpperCase()}
                  </Avatar>
                )}
                <div classname = "flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {partner.fname} {partner.lname}
                </h3>
                <p className="text-gray-600 mb-4">{descriptions}</p>
                </div>
                </div>
                <div style={{ flexBasis: '33%' }}></div>
                <button
                  onClick={() => sendFriendRequest(partner.username)}
                  className="bg-[#FF3737] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Request Friend
                </button>
              
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