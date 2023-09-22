import React from 'react'
import './Register.css'

const Register = () => {
  return (
		<div classname="bg-beige"> 
			<Logo />
			<Form />
		</div>
  )
}

const Logo = () => {
	return (
		<h1 className="logo-purple"> Oauthpal </h1>
	)
}

const Form = () => {
	return (
		<form className="form-box">

      <label className="label">First Name</label>
      <input className="text-box" type="text" />

      <label className="label"> Last Name</label>
      <input className="text-box" type="text" />

		</form>
	)
}

export default Register 
