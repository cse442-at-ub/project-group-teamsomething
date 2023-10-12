import React from "react";

import background from "../../assets/loginBackground.png";
import google from "../../assets/googleIcon.png";
import facebook from "../../assets/facebookIcon.png";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#E8E9F4] relative flex items-center justify-center">
      <div className="w-[500px] h-auto bg-[#662c91] rounded-3xl flex flex-col pt-8 pb-8 items-center z-10">
        <button className="bg-white w-11/12 h-12 mb-5 flex flex-row justify-center items-center gap-5 rounded-xl">
          <img src={google} width={30} height={30} alt="Google Logo" />
          <p className="text-xl">Log in with Google</p>
        </button>
        <button className="bg-white w-11/12 h-12 mb-6 flex flex-row justify-center items-center gap-5 rounded-xl">
          <img src={facebook} width={30} height={30} alt="Facebook Logo" />{" "}
          <p className="text-xl">Log in with Facebook</p>
        </button>
        <form className="w-11/12">
          <div className="mb-5">
            <p className="text-white">Email</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl mb-4"></input>

            <p className="text-white">Password</p>
            <input className="bg-[#FFFFFF] w-full h-8 rounded-3xl"></input>
          </div>

          <div className="flex flex-row gap-4">
            <button className="bg-[#FF3737] rounded-3xl px-5 py-2 text-white">
              Login
            </button>
            <button
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
