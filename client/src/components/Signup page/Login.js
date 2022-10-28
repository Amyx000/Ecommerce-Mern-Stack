import React, { useState} from 'react'
import "./userform.css"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import axios from 'axios'
import ClockLoader from "react-spinners/ClockLoader"
import Message from '../Dialog Box/Message'


function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const[email, Setemail] = useState("")
  const[password, Setpassword] = useState("")
  const[err,Seterr]=useState("")


  const loader = ()=>{
    setLoading(true)
        setTimeout(()=>{
          navigate("/")
          setLoading(false)
        },2000)
  }
  const clickfuc = async ()=>{
    setLoading(false)
    if (!email||!password) {
      Seterr("Enter All the Field")
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,{
          email:email,
          password:password
        },{withCredentials: true})
        Seterr("")
        loader()
      } 
      catch (error) {
        console.log(error.response.data)
        Seterr("Wrong Credentials")
      }
    }
   
  }

  return (
    <>
    {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:
    <div className='form-back'>
        <div className='form-block'>
            <div className='form-head'>Login your Account</div>
            <div className='form'>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div>
            <input className='form-input' placeholder='Enter your Email' type="text" value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div>
            <input className='form-input' placeholder='Enter Password' type="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input> 
            <div className='forgot-pass'>Forget Password?</div>
            {err?<Message cls="msg-color-r loginerr" msg={err}/>:null}
            <div className='form-btn-div'><button className='form-btn' onClick={clickfuc}>Login</button></div>
            </div>
            <div className='form-endline'>NOT REGISTERED? <Link className='form-endline-btn' to={"/signup"}>SIGN UP</Link></div>
        
        </div>
    </div>}
    
    </>
  )
}

export default Login