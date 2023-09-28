import React from 'react'
import './Register.css'
import ppl from "./people.png";

const Register = () => {
  return (
		<div className='bg'> 
			<h1 className='logo'> Oauthpal </h1>
			<h2 className="form-title row-start-2 col-start-2">Register</h2>
			<form className="form-box">
				<label className="label">First Name</label>
      			<input className="text-box" type="text" />
				<label className="label"> Last Name</label>
      			<input className="text-box" type="text" />
				<br/>
      			<label className="label">Email</label>
      			<input className="text-box" type="text" />
				<br/>
     		 	<label className="label">Password</label>
      			<input className="text-box" type="text" />
			</form>
		</div>
  )
}

/*
const ppl = () => {
	return (
		<img className="ppl">
	)
}
*/

const Form = () => {
	return (
		<form className="form-box">
		</form>
	)
}

export default Register 
