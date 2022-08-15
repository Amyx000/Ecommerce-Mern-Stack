import React, { useState } from 'react'
import "./userform.css"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const[email, Setemail] = useState("")
  const[password, Setpassword] = useState("")

  const clickfuc = async ()=>{

    try {
      const res = await axios.post("http://localhost:5000/auth/login",{
        email:email,
        password:password
      },{withcredentials: true})
      navigate("/")
      console.log(res.data)
    } 
    catch (error) {
      console.log(error.response.data)
    }
   
  }
  

  return (
    <>
    <div className='form-back'>
        <div className='form-block'>
            <div className='form-head'>Login your Account</div>
            <div className='form'>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div>
            <input className='form-input' placeholder='Enter your Email' type="text" value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div>
            <input className='form-input' placeholder='Enter Password' type="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input> 
            <div className='forgot-pass'>Forget Password?</div>
            <div className='form-btn-div'><button className='form-btn' onClick={clickfuc}>Login</button></div>
            </div>
            <div className='form-endline'>NOT REGISTERED? <Link className='form-endline-btn' to={"/signup"}>SIGN UP</Link></div>
        
        </div>
    </div>
    </>
  )
}

export default Login