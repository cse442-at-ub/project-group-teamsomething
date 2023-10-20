import React from 'react'
import './Register.css'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

var cheshire= "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/backend/register.php"
// var local = "http://localhost:80/442/Register.php"
  

const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  
	const registerHandler = async (event) => {
	  console.log(username);
	  console.log(password);
	  event.preventDefault();
	  try {
		const res = await axios.post("http://localhost:8000/register", { username, password });
		console.log(res);
	  } catch (error) {
		console.error(error);
	  }
	};
  return (
		<div className='bg'>

			<h1 className='logo'> Oauthpal </h1>
			<h2 className="form-title row-start-2 col-start-2">Register</h2>
			<form action={registerHandler}  method="post" className="form-box">

				<div className="fname">
				<label className="label">First Name</label>
				<input className="text-box" name="fname" type="text" />
				</div>

				<div className="lname">
				<label className="label">Last Name</label>
				<input className="text-box" type="text" />
				</div>

				<div className="username">
				<label className="label">Username</label>
				<input className="text-box" type="text" 
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				/>
				</div>

				<div className="pw">
				<label className="label">Password</label>
				<input className="text-box" type="text" 
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				/>
				</div>

				<button type="submit" method="post" className="reg-button">Register</button>
				<button className="login-button">Login</button>

			</form>

			<div className='image'></div> 

		</div>
  )
}

export default Register 