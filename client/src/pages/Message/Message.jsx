import React, { useState, useEffect, useContext } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import SideDrawer from "../../components/SideDrawer/SideDrawer";
import { AuthContext } from "../../context/auth-context";

const Message = () => {
  const auth = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: auth.username };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideDrawer />
      </Grid>

      <Grid item xs={2}>
        <div className="w-full h-full bg-gray-100 p-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Your Current Partner
            </h1>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <img
              className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
              src="../../assets/TempProfilePic.png"
              alt="Profile"
            />
            <h1 className="text-xl font-medium text-gray-700">Samantha</h1>
          </div>

          <div className="text-sm text-gray-600 mb-2">Goal</div>

          <div className="text-sm text-gray-600 mb-2">
            GoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </div>

          <div className="text-sm text-gray-600 mb-4">Hobbies and Interests</div>

          <div className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className="text-sm text-gray-500 mb-6">
            Contract - Othopal disclaims responsibility for contract breaches,
            as the agreement relies solely on trust between the two parties.
          </div>

          <div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
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
                    message.sender === auth.username
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded px-4 py-2 m-2 ${
                      message.sender === "username"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input field */}
            <div className="border-t-2 border-gray-200 p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Message Samantha..."
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
};

export default Message;
