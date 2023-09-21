import React from 'react'
import './Register.css'

const Register = () => {
  return (
		<div>
			<h1 className="logo-purple"> Oauthpal </h1>
			<Form />
		</div>
  )
}

const Form = () => {
	return (
		<form className="form-box">

      <label>First Name
        <input className="text-box" type="text" />
      </label>
			<br />

      <label>Last Name
        <input className="text-box" type="text" />
      </label>
			<br />

		</form>
	)
}

export default Register 
