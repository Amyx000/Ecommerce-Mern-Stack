import React, { useState } from 'react'
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
            <div className='font-icon-div'><BiUser className='font-icon'/></div><input className='form-input' placeholder='Enter your Name*' type="text"></input>
            <div className='font-icon-div'><AiOutlineMail className='font-icon'/></div><input className='form-input' placeholder='Enter your Email*' type="text"></input>
            <div className='font-icon-div'><FaMobileAlt className='font-icon'/></div><input className='form-input' placeholder='+91 Mobile Number*' type="text"></input>
            <div className='font-icon-div'><RiLockPasswordLine className='font-icon'/></div><input className='form-input' placeholder='Choose Password*' type="password"></input>
            <div className='font-icon-div' onClick={calenfuc}>{opencalen==="form-calen-hide"?<MdDateRange className='font-icon calen-icon'/>:<MdClose className='font-icon'/>}</div><input className='form-input' placeholder='Select your Birthday' type="text" value={bdayval} onClick={calenfuc}></input>
            <div className={opencalen}>
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
              />
            </div>
            <div className='form-btn-div'><button className='form-btn'>REGISTER</button></div>
            </div>
            <div className='form-endline'>ALREADY REGISTER? <Link className='form-endline-btn' to={"/login"}>LOGIN</Link></div>
        
        </div>
    </div>
    </>
  )
}

export default Signup