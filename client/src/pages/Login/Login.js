import React from "react";
import axios from "axios";
import { useState } from "react";

import background from "../../assets/loginBackground.png";
import google from "../../assets/googleIcon.png";
import facebook from "../../assets/facebookIcon.png";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    console.log(username);
    console.log(password);
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", { username, password });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="h-screen bg-[#FED99B] relative flex items-center justify-center">
      <div className="w-[500px] h-auto bg-[#662c91] rounded-3xl flex flex-col pt-8 pb-8 items-center z-10">
        <button className="bg-white w-11/12 h-12 mb-5 flex flex-row justify-center items-center gap-5 rounded-xl">
          <img src={google} width={30} height={30} alt="Google Logo" />
          <p className="text-xl">Log in with Google</p>
        </button>

        <button className="bg-white w-11/12 h-12 mb-6 flex flex-row justify-center items-center gap-5 rounded-xl">
          <img src={facebook} width={30} height={30} alt="Facebook Logo" />{" "}
          <p className="text-xl">Log in with Facebook</p>
        </button>

        <form onSubmit={loginHandler} className="w-11/12">
          <div className="mb-5">
            <p className="text-white">Username</p>
            <input 
              type="text" 
              className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />

            <p className="text-white">Password</p>
            <input 
              type="password" 
              className="bg-[#FFFFFF] w-full h-8 rounded-3xl" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-row gap-4">
            <button type="submit" className="bg-[#FF3737] rounded-3xl px-5 py-2 text-white">
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/sign-up");
              }}
              className="text-white"
            >
              Register
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

export default Login;
