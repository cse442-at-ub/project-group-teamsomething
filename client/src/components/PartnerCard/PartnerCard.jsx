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
    const fetchDescriptions = async () => {
      const newDescriptions = {};
  
      for (const partner of partners) {
        try {
          const descResponse = await axios.get(pfdescription, { params: { username: partner.username } });
          // console.log("API response for", partner.username, ":", descResponse.data);
  
          // Assuming descResponse.data is an array of objects
          const partnerDescription = descResponse.data.find(desc => desc.username === partner.username);
          newDescriptions[partner.username] = partnerDescription ? partnerDescription.description : null;
        } catch (error) {
          console.error("Error fetching user description for", partner.username, ":", error);
          newDescriptions[partner.username] = null;
        }
      }
  
      setPartnerDescriptions(newDescriptions);
    };
  
    if (partners.length > 0) {
      fetchDescriptions();
    }
  }, [partners]);

  const sendFriendRequest = async (uname) => {
    try {
      const response = await axios.post(requestPartnerURL, {
        sender: auth.username,
        receiver: uname,
      });
      // console.log(response.data);
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
          // console.log("Rendering partner:", partner.username, "Description:", descriptions);

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg shadow-md mb-4 px-6 py-4"
            >
              <div className= "flex items-center space-x-4">
                {partnerPic ? (
                  <img src={partnerPic} className="w-32 h-32 rounded-full object-cover" alt="Partner Profile" />
                ) : (
                  <Avatar
                    style={{ backgroundColor: stringToColor(partner.username), width: 110, height: 110, fontSize: 35 }}
                    className="mr-5"
                  >
                    {partner.fname[0].toUpperCase()}
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">{partner.fname} {partner.lname}</span>
                  <span className="text-gray-500 text-lg">@{partner.username}</span>
                  {descriptions ? (
                    <p className="text-gray-600 text-lg mr-2">{descriptions}</p>
                  ) : (
                    <p className="text-gray-600 text-lg mr-2"></p>
                  )
                  }  
                </div>
                </div> 
                <div className="flex items-center">
                                
                  <button
                    onClick={() => sendFriendRequest(partner.username)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-lg transition-colors duration-300 ease-in-out"
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