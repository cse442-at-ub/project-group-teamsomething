import axios from "axios";
import React, { useState, useContext } from "react";

import background from "../../assets/loginBackground.png";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

var cheshire =
  "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/server/login.php";
// var cheshire = "http://localhost:8080/server/login.php";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const { login } = useContext(AuthContext)

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      if (username.trim() === "") {
        alert("Please enter a username.");
        return;
      }

      if (password.trim() === "") {
        alert("Please enter a password.");
        return;
      }
      const res = await axios.post(cheshire, { username, password });
      console.log(res)
      console.log(res.data)
      console.log(res.data.user)

      if (res.status == 200) {
        login(res.data.user.username, res.data.user.fname, res.data.user.lname, res.data.user.partner);
        navigate("/home");
      }
      console.log(auth.username);
    } catch (error) {
      alert("Wrong password")
      console.error(error);
    }
  };

  return (
    <div className="h-screen bg-[#FED99B] relative flex items-center justify-center">
      <div className="w-[500px] h-auto bg-[#662c91] rounded-3xl flex flex-col pt-8 pb-8 items-center z-10">
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
            <button
              type="submit"
              className="bg-[#FF3737] rounded-3xl px-5 py-2 text-white"
            >
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
