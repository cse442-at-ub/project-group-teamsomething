import React from 'react'
import './Register.css'
import ppl from "./people.png";

const Register = () => {
  return (
		<div className='bg-[#FED99B] h-screen flex w-screen grid grid-cols-8 grid-rows-8'> 
		<h1 className="logo row-start-1 row-end-6 flex"> Oauthpal </h1>
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

const Form = () => {
	return (
		<form className="form-box row-start-4 row-end-7 flex grid grid-rows-6 grid-cols-6">

			<div className='col-start-2 row-start-3 col-span-4'> 
      <label className="label">First Name</label>
      <input className="text-box" type="text" />
			</div>

/*
			<div className='col-start-2'> 
      <label className="label"> Last Name</label>
      <input className="text-box" type="text" />
			</div>
			<div className='col-start-2'> 
      <label className="label">Email</label>
      <input className="text-box" type="text" />
			</div>

			<div className='col-start-2'> 
      <label className="label">Password</label>
      <input className="text-box" type="text" />
			</div>
			*/

			<button className="button">Register</button>

		</form>
	)
}

export default Register 
