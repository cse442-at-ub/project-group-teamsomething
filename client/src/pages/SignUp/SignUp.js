import React from "react";

import background from "../../assets/loginBackground.png";
import google from "../../assets/googleIcon.png";
import facebook from "../../assets/facebookIcon.png";

import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#E8E9F4] relative flex items-center justify-center">
      <div className="w-[500px] h-auto bg-[#662c91] rounded-3xl flex flex-col pt-8 pb-8 items-center z-10">
        <form className="w-11/12">
          <p className="text-white">First Name</p>
          <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"></input>

          <p className="text-white">Last Name</p>
          <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"></input>

          <p className="text-white">Email</p>
          <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"></input>

          <p className="text-white">Password</p>
          <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"></input>

          <p className="text-white">Confirm Password</p>
          <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-8"></input>

          <div className="flex flex-row gap-4">
            <button className="bg-[#FF3737] rounded-3xl px-5 py-2 text-white">
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
