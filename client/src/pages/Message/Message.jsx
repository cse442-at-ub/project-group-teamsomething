import { useState, useEffect, useContext } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import { AuthContext } from "../../context/auth-context";

var retrieveMessageCheshire =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/retrieveMessage.php";

var sendMessageCheshire =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/sendMessage.php";

var endPartnership =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/endPartnership.php";


import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";



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

const Message = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { makePartner, removePartner } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [pollingInterval, setPollingInterval] = useState(1000);


  const updateMessages = async () => {
    try {
      const response = await axios.post(retrieveMessageCheshire, {
        sender_username: auth.username,
        receiver_username: auth.partner,
      });
      console.log(response);
      setMessages(response.data);



    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    // Set up the interval for polling
    const intervalId = setInterval(updateMessages, pollingInterval);
    console.log("Polling...");

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [pollingInterval]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const newMessage = {
        text: input,
        sender_username: auth.username,
        receiver_username: auth.partner,
      };

      try {
        setMessages((messages) => [...messages, newMessage]);
        setInput("");
        const response = await axios.post(sendMessageCheshire, newMessage);
        console.log(response);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const endPartner = async () => {
    const confirmEnd = window.confirm(
      'Would you like to share your experience? Leave a reivew for your partner'
    );

    if (confirmEnd) {
      try {
        const res = await axios.post(endPartnership, {
          requester_username: auth.username,
          receiver_username: auth.partner,
        });

        console.log(res);
        makePartner(null);
        navigate("/partner-reviews");
        // removePartner();
        console.log(auth.partner);
      } catch (err) {
        console.error("Error ending partnership:", err);
      }
    }
    // If the user clicks Cancel in the confirmation popup, do nothing
  };
  

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer/>
      </Grid>

      <Grid item xs={2}>
        <div className="w-full h-full bg-gray-100 p-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Your Current Partner
            </h1>
          </div>

          <div className="flex items-center space-x-4 mb-4">
              <Avatar
                sx={{
                  bgcolor: stringToColor(auth.partner),
                  width: 48,
                  height: 48,
                  marginRight: 2,
                }}
              >
                {auth.partner[0].toUpperCase()}
              </Avatar>
            <h1 className="text-xl font-medium text-gray-700">
              {auth.partner}
            </h1>
          </div>

          <div className="text-sm text-gray-600 mb-2">Goal</div>

          <div className="text-sm text-gray-600 mb-2">
            GoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Hobbies and Interests
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className="text-sm text-gray-500 mb-6">
            Contract - Othopal disclaims responsibility for contract breaches,
            as the agreement relies solely on trust between the two parties.
          </div>

          <div>
            <button
              onClick={endPartner}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              End partnership
            </button>
          </div>
        </div>
      </Grid>

      <Grid item xs={8}>
        <div className="flex h-screen antialiased text-gray-800">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {/* Chat Messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender_username === auth.username
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded px-4 py-2 m-2 ${
                      message.sender_username === auth.username
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input field */}
            <div className="border-t-2 border-gray-200 p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Message Partner..."
                  className="w-full pl-4 pr-10 py-3 rounded-md bg-gray-100 text-gray-600 placeholder-gray-600 focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 text-gray-500 focus:outline-none"
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Message;

                  
