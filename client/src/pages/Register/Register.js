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
		<form>

			<label> First Name
				<input type="text" />
			</label>

			<label> Last Name
				<input type="text" />
			</label>

			<label> Email
				<input type="text" />
			</label>

			<label> Password 
				<input type="text" />
			</label>

		</form>
	)
}

export default Register 
