import React from 'react'
import './Register.css'
import ppl from "./people.png";

const Register = () => {
  return (
		<div className='bg-[#FED99B] h-screen w-screen'> 
			<Logo />
			<FormTitle />
			<Form />
			<img className="ppl" source={ppl} alt="people"></img>
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

const FormTitle = () => {
	return (
			<h2 className="form-title">Register</h2>
	)
}

const Logo = () => {
	return (
		<h1 className="logo"> Oauthpal </h1>
	)
}

const Form = () => {
	return (
		<form className="form-box">

			<br/>
			<br/>
      <label className="label">First Name</label>
      <input className="text-box" type="text" />
			<br/>
      <label className="label"> Last Name</label>
      <input className="text-box" type="text" />
			<br/>
      <label className="label">Email</label>
      <input className="text-box" type="text" />
			<br/>
      <label className="label">Password</label>
      <input className="text-box" type="text" />
			<br/>
			<button className="button">Register</button>

		</form>
	)
}

export default Register 
