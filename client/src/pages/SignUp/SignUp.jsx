import React from "react";
import axios from "axios";
import { useState } from "react";


import background from "../../assets/loginBackground.png";
import google from "../../assets/googleIcon.png";
import facebook from "../../assets/facebookIcon.png";

import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (event) => {
    console.log(username);
    console.log(password);
    event.preventDefault();
    try {
      const res = await axios.post("https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/backend/index.php", { username, password });
      console.log(res.config.data)
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="h-screen bg-[#E8E9F4] relative flex flex-col items-center justify-center">
      <p className="mb-5 text-5xl font-playfair font-black">Oathopal</p>
      <p className="mb-5 text-xl">Register</p>
      <div className="w-[500px] h-auto bg-[#662c91] rounded-3xl flex flex-col pt-8 pb-8 items-center z-10">
        <form className="w-11/12" onSubmit={registerHandler}>
        <div className="mb-5">
            <p className="text-white">First Name</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"/>

            <p className="text-white">Last Name</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl"/>
          </div>

          <div className="mb-5">
            <p className="text-white">Username</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />

            <p className="text-white">Password</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-white">Confirm Password</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl"/>
          </div>

          <div className="flex flex-row gap-4">
            <button type="submit" className="bg-[#FF3737] rounded-3xl px-5 py-2 text-white">
              Register
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 right-0 z-0 hidden md:block">
        <img src={background} alt="Background Image"></img>
      </div>
    </div>
  );
};

export default SignUp;