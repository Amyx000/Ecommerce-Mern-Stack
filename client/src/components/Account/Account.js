import React, { useEffect, useState } from 'react'
import "./Account.css"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import ClockLoader from "react-spinners/ClockLoader"

function Account() {
  const navigate = useNavigate()
  const[user,setuser]=useState("")
  const [loading, setLoading] = useState(true);
  const[shipname,Setshipname]=useState("");
  const[street,Setstreet]=useState("")
  const[city,Setcity]=useState("")
  const[postcode,Setpostcode]=useState("")
  const[state,Setstate]=useState("")
  
  const loader = ()=>{
    setLoading(true)
        setTimeout(()=>{
          setLoading(false)
    },1000)
 }

  useEffect(() => {
    async function authenticated(){
      const res = await axios.get("http://localhost:5000/account/isauth",{withCredentials: true,})
      loader()
      if(res.data===false){
        navigate("/login")
      }

    }
    authenticated()
      // eslint-disable-next-line
  }, [])
  
  useEffect(() => {

    const getloggeduser=async()=>{
      try {
        const res = await axios.get("http://localhost:5000/account",{withCredentials: true,})
        setuser(res.data)
      } catch (error) {
        console.log(error.response.data)
      }
      
    }
    getloggeduser()
      // eslint-disable-next-line
  }, [])

  const submitAddress = async()=>{
    try {
      const res = await axios.post("http://localhost:5000/account/addresses",{
        shipname,
        street,
        city,
        postcode,
        state
      },{withCredentials: true})
      console.log(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:
       <div className='account'>
         <h1>Account</h1>
         <div className='account-main'>
           <div className='account-main-l'>
             <Link className='link' to={"/account"}><div className='account-main-title'>Overview</div></Link>
             <div className='account-main-sec'>
               <div className='account-main-head'>ACCOUNT</div>
               <Link className='link' to={"/account/profile"}><div className='account-main-subhead'>Profile</div></Link>
               <Link className='link' to={"/account/password"}><div className='account-main-subhead'>Change Password</div></Link>
               <Link className='link' to={"/account/addresses"}><div className='account-main-subhead'>Addresses</div></Link>
               <Link className='link' to={"/account/wishlist"}><div className='account-main-subhead'>Wishlist</div></Link>
             </div>
             <div className='account-main-sec'>
               <div className='account-main-head'>ORDERS</div>
               <Link className='link' to={"/account/orders"}><div className='account-main-subhead'>Your Orders</div></Link>
             </div>
             <div className='account-main-sec'>
               <div className='account-main-head'>PANELS</div>
               <Link className='link' to={"/account/admin"}><div className='account-main-subhead'>Admin</div></Link>
               <Link className='link' to={"/account/seller"}><div className='account-main-subhead'>Seller</div></Link>
             </div>
           </div>
           <div className='account-main-r'>
             <Routes>
               <Route path='/' element={
                 <div>
                   <div className='account-r-top'>
                     <div className='acc-img-main'>
                       <img className='acc-img' src='https://images.bestsellerclothing.in/temp/ans-myaccount/person.png' alt=''></img>
                     </div>
                     <div>
                       <div className='acc-name'>{user.name}</div>
                       <div>{user.email}</div>
                     </div>
                   </div>
                   <div className='account-r-bot'>
                     <div>Profile</div>
                     <div>Addresses</div>
                     <div>Orders</div>
                     <div>Wishlist</div>
                   </div>
               </div>
               }/>
               <Route path='/profile' element={
                 <>
                 <div className='acc-title'>Your Personal Details</div>
                 <div className='profile-main'>
                   <div>Name:</div><input type="text" value={user.name}/>
                   <div>Email:</div><input className='input-disabled' type="text" value={user.email} readOnly/>
                   <div>Mobile:</div><input className='input-disabled' type="text" value={user.mobile} readOnly/>
                 </div>
                 <div className='acc-btn-main'><button className='acc-btn'>Update</button></div>
                 </>
               }/>
               <Route path='/password' element={
                 <>
                 <div className='acc-title'>Change Password</div>
                 <div className='acc-pass-main'>
                   <div><span>* </span>Current Password</div>
                   <input type="text" placeholder='Current Password'/>
                   <div><span>* </span>New Password</div>
                   <input type="text" placeholder='New Password'/>
                   <div><span>* </span>Confirm Password</div>
                   <input type="text" placeholder='Confirm Password'/>
                   <button>Change Password</button>
                 </div>
                 </>
               }/>
               <Route path='/addresses' element={
                 <>
                 <div className='acc-title'>Addresses</div>
                 <div className='profile-main'>
                   <div><span>* </span>Name</div><input type="text" value={shipname} onChange={e=>Setshipname(e.target.value)}/>
                   <div><span>* </span>Street</div><input type="text" value={street} onChange={e=>Setstreet(e.target.value)}/>
                   <div><span>* </span>City</div><input type="text" value={city} onChange={e=>Setcity(e.target.value)}/>
                   <div><span>* </span>Post Code</div><input type="text" value={postcode} onChange={e=>Setpostcode(e.target.value)}/>
                   <div><span>* </span>State</div>
                   <select onChange={e=>Setstate(e.target.value)}>
                    <option value={""} disabled selected>Select State</option>
                    <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
                    <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
                    <option value={"Assam"}>Assam</option>
                    <option value={"Bihar"}>Bihar</option>
                    <option value={"Chhattisgarh"}>Chhattisgarh</option>
                    <option value={"Goa"}>Goa</option>
                    <option value={"Gujarat"}>Gujarat</option>
                    <option value={"Haryana"}>Haryana</option>
                    <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
                    <option value={"Jharkhand"}>Jharkhand</option>
                    <option value={"Karnataka"}>Karnataka</option>
                    <option value={"Kerala"}>Kerala</option>
                    <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
                    <option value={"Maharashtra"}>Maharashtra</option>
                    <option value={"Manipur"}>Manipur</option>
                    <option value={"Meghalaya"}>Meghalaya</option>
                    <option value={"Mizoram"}>Mizoram</option>
                    <option value={"Nagaland"}>Nagaland</option>
                    <option value={"Odisha"}>Odisha</option>
                    <option value={"Punjab"}>Punjab</option>
                    <option value={"Rajasthan"}>Rajasthan</option>
                    <option value={"Sikkim"}>Sikkim</option>
                    <option value={"Tamil Nadu"}>Tamil Nadu</option>
                    <option value={"Telangana"}>Telangana</option>
                    <option value={"Tripura"}>Tripura</option>
                    <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                    <option value={"Uttarakhand"}>Uttarakhand</option>
                    <option value={"West Bengal"}>West Bengal</option>
                   </select>
                 </div>
                 <div className='acc-btn-main'><button onClick={submitAddress} className='acc-btn'>Submit</button></div>
                 </>
               }/>
               <Route path='/wishlist' element={
                 <>
                 <div className='acc-title'>Wishlist</div>
                 <div className='acc-pass-main'>
                   <div>You don't have any wishlist!</div>
                   <Link className='links' to={"/account"}><button>Continue</button></Link>
                 </div>
                 </>
               }/>
               <Route path='/orders' element={
                 <>
                 <div className='acc-title'>Orders</div>
                 <div className='acc-pass-main'>
                   <div>You don't have any order placed!</div>
                   <Link className='links' to={"/account"}><button>Continue</button></Link>
                 </div>
                 </>
               }/>
               <Route path='/admin' element={
                 <>
                 <div className='acc-title'>Admin Dashboard</div>
                 </>
               }/>
               <Route path='/seller' element={
                 <>
                 <div className='acc-title'>Seller Dashboard</div>
                 </>
               }/>
             </Routes>
           </div>
   
         </div>
       </div>
      }
    </>
  )
}

export default Account


