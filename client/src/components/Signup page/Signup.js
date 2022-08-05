import React from 'react'
import "./userform.css"
import { Link } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {FaMobileAlt} from "react-icons/fa"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdDateRange} from "react-icons/md"

function Signup() {
  return (
    <>
    <div className='form-back'>
        <div className='form-block'>
            <div className='form-head'>Register With Us</div>
            <div className='form'>
            <div className='font-icon-div'><BiUser className='font-icon'/></div><input className='form-input' placeholder='Enter your Name*' type="text"></input>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div><input className='form-input' placeholder='Enter your Email*' type="text"></input>
            <div className='font-icon-div'><FaMobileAlt className='font-icon'/></div><input className='form-input' placeholder='+91 Mobile Number*' type="text"></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div><input className='form-input' placeholder='Choose Password*' type="password"></input>
            <div className='font-icon-div'><MdDateRange className='font-icon'/></div><input className='form-input' placeholder='Date of Birth' type="text"></input>
            <div className='form-btn-div'><button className='form-btn'>REGISTER</button></div>
            </div>
            <div className='form-endline'>ALREADY REGISTER? <Link className='form-endline-btn' to={"/login"}>LOGIN</Link></div>
        
        </div>
    </div>
    </>
  )
}

export default Signup