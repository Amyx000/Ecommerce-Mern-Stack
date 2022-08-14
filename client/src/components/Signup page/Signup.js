import React, { useState } from 'react'
import axios from 'axios';
import "./userform.css"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Link } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {FaMobileAlt} from "react-icons/fa"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdDateRange,MdClose} from "react-icons/md"
import { Calendar } from 'react-modern-calendar-datepicker';




function Signup() {
  const[a,Seta]=useState(false)
  const[bdayval,Setbdayval]=useState("")
  const [selectedDay, setSelectedDay] = useState("");
  const date = selectedDay.year+"-"+selectedDay.month+"-"+selectedDay.day;
  const[opencalen,Setopencalen]=useState("form-calen-hide")

  const[name, Setname] = useState("")
  const[email, Setemail] = useState("")
  const[number, Setnumber] = useState("")
  const[password, Setpassword] = useState("")


  const clickfuc = async ()=>{

    try {
      const res = await axios.post("http://localhost:5000/auth/register",{
        name:name,
        email:email,
        mobile:number,
        password:password,
        dob:bdayval
      })
      console.log(res.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const calenfuc = ()=>{
    if(a===false){
      Setopencalen("form-calen")
      Seta(true)
      
    }
    else{
      Setopencalen("form-calen-hide")
      Seta(false)
      if(selectedDay!==""){Setbdayval(date)}
  }
    
  }


  return (
    <>
    <div className='form-back'>
        <div className='form-block'>
            <div className='form-head'>Register With Us</div>
            <div className='form'>
            <div className='font-icon-div'><BiUser className='font-icon'/></div>
            <input className='form-input' placeholder='Enter your Name*' type="text" value={name} onChange={(e)=>{Setname(e.target.value)}}></input>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div>
            <input className='form-input' placeholder='Enter your Email*' type="text" value={email} onChange={(e)=>{Setemail(e.target.value)}}></input>
            <div className='font-icon-div'><FaMobileAlt className='font-icon'/></div>
            <input className='form-input' placeholder='+91 Mobile Number*' type="text" value={number} onChange={(e)=>{Setnumber(e.target.value)}}></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div>
            <input className='form-input' placeholder='Choose Password*' type="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}}></input>
            <div className='font-icon-div' onClick={calenfuc}>{opencalen==="form-calen-hide"?<MdDateRange className='font-icon calen-icon'/>:<MdClose className='font-icon'/>}</div><input className='form-input' placeholder='Select your Birthday' type="text" value={bdayval} onClick={calenfuc}></input>
            <div className={opencalen}>
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
              />
            </div>
            <div className='form-btn-div'><button className='form-btn' onClick={clickfuc}>REGISTER</button></div>
            </div>
            <div className='form-endline'>ALREADY REGISTER? <Link className='form-endline-btn' to={"/login"}>LOGIN</Link></div>
        
        </div>
    </div>
    </>
  )
}

export default Signup