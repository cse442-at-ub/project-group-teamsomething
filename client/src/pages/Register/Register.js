import React from 'react'
import './Register.css'
import ppl from "./people.png";
import "./temp.png"

const Register = () => {
  return (
		<div className='bg'> 
				<img source={ppl} alt="can't load image" className='divImg'></img>
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
