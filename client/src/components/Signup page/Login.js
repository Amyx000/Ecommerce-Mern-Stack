import React from 'react'
import "./userform.css"
import { Link } from 'react-router-dom'
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"

function Login() {
  return (
    <>
    <div className='form-back'>
        <div className='form-block'>
            <div className='form-head'>Login your Account</div>
            <div className='form'>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div><input className='form-input' placeholder='Enter your Email' type="text"></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div><input className='form-input' placeholder='Enter Password' type="password"></input> 
            <div className='forgot-pass'>Forget Password?</div>
            <div className='form-btn-div'><button className='form-btn'>Login</button></div>
            </div>
            <div className='form-endline'>NOT REGISTERED? <Link className='form-endline-btn' to={"/signup"}>SIGN UP</Link></div>
        
        </div>
    </div>
    </>
  )
}

export default Login