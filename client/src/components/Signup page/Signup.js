import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./userform.css"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Link, useNavigate } from 'react-router-dom'
import {BiUser} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {FaMobileAlt} from "react-icons/fa"
import {RiLockPasswordLine} from "react-icons/ri"
import {MdDateRange} from "react-icons/md"
import ClockLoader from "react-spinners/ClockLoader"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';


function Signup() {
  const [loading, setLoading] = useState(false);
  const[bdayval,Setbdayval]=useState("")
  const[name, Setname] = useState("")
  const[email, Setemail] = useState("")
  const[number, Setnumber] = useState("")
  const[password, Setpassword] = useState("")
  const[open,setOpen]=useState(false)
  const[value,setValue]=useState(dayjs(''))
  const navigate = useNavigate()

  const loader = ()=>{
    setLoading(true)
        setTimeout(()=>{
          navigate("/")
          setLoading(false)
        },2000)
  }

  useEffect(() => {
    Setbdayval(`${value.$y}-${value.$M+1}-${value.$D}`)
  }, [value.$y,value.$M,value.$D,bdayval])
  

  const clickfuc = async ()=>{
    try {
      await axios.post("http://localhost:5000/auth/register",{
        name:name,
        email:email,
        mobile:number,
        password:password,
        dob:bdayval
      })
      loader()
    } catch (error) {
      console.log(error.response.data)
    }
  }


  return (
    <>
    {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:
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
           
            <div className='font-icon-div'><MdDateRange className='font-icon calen-icon'/></div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                  open={open}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  disableFuture
                  disableOpenPicker="true"
                  openTo="day"
                  inputFormat="DD-MM-YYYY"
                  views={['year', 'month', 'day']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField onClick={(e) => setOpen(true)} variant="filled"
                  {...params}
                  sx={{ 
                    "& input":
                     { padding: "5px"} 
                      }}
                  InputProps={{
                    style: {
                      height: "40px",
                      border:"none", backgroundColor:" #DCDCDC",
                      borderBottomRightRadius:"5px", borderTopRightRadius:"5px", borderTopLeftRadius:"0", borderBottomLeftRadius:"0"
                    }, disableUnderline: true,
                  }} />}
                />
            </LocalizationProvider>
            <div className='form-btn-div'><button className='form-btn' onClick={clickfuc}>REGISTER</button></div>
            </div>
            <div className='form-endline'>ALREADY REGISTER? <Link className='form-endline-btn' to={"/login"}>LOGIN</Link></div>
        
        </div>
    </div>}
    </>
  )
}

export default Signup