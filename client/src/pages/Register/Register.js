import React from 'react'
import './Register.css'

const Register = () => {
  return (
		<div className='bg'>

			<h1 className='logo'> Oauthpal </h1>
			<h2 className="form-title row-start-2 col-start-2">Register</h2>
			<form className="form-box">

				<div className="fname">
				<label className="label">First Name</label>
				<input className="text-box" type="text" />
				</div>

				<div className="lname">
				<label className="label">Last Name</label>
				<input className="text-box" type="text" />
				</div>

				<div className="email">
				<label className="label">Email</label>
				<input className="text-box" type="text" />
				</div>

				<div className="pw">
				<label className="label">Password</label>
				<input className="text-box" type="text" />
				</div>

				<button className="reg-button">Register</button>
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