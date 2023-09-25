import React from 'react'
import './Register.css'

const Register = () => {
	document.body.style = 'background: blue;';
  return (
		<div classname="bg-beige"> 
			<Logo />
			<FormTitle />
			<Form />
		</div>
  )
}

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
