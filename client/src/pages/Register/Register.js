import React from 'react'
import './Register.css'

var cheshire= "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442x/backend/register.php"
// var local = "http://localhost:80/442/Register.php"

const Register = () => {
  return (
		<div className='bg'>

			<h1 className='logo'> Oauthpal </h1>
			<h2 className="form-title row-start-2 col-start-2">Register</h2>
			<form action={cheshire}  method="post" className="form-box">

				<div className="fname">
				<label className="label">First Name</label>
				<input className="text-box" name="fname" type="text" />
				</div>

				<div className="lname">
				<label className="label">Last Name</label>
				<input className="text-box" type="text" />
				</div>

				<div className="email">
				<label className="label">Email</label>
				<input className="text-box" name="username" type="text" />
				</div>

				<div className="pw">
				<label className="label">Password</label>
				<input className="text-box" name="password" type="text" />
				</div>

				<button type="submit" method="post" className="reg-button">Register</button>
				<button className="login-button">Login</button>

			</form>

			<div className='image'></div> 

		</div>
  )
}

/*
const Form = () => {
	return (
		<form className="form-box">
		</form>
	)
}
*/

export default Register 