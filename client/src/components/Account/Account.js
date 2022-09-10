import React from 'react'
import "./Account.css"
import {Routes, Route, Link} from "react-router-dom"
import {useSelector} from "react-redux"

function Account() {
  const userdata =useSelector(state=>state.user.userdata)
  return (
    <>
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
                    <div className='acc-name'>{userdata.name}</div>
                    <div>{userdata.email}</div>
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
                <div>Name:</div><input type="text" value={userdata.name}/>
                <div>Email:</div><input className='input-disabled' type="text" value={userdata.email} readOnly/>
                <div>Mobile:</div><input className='input-disabled' type="text" value={userdata.mobile} readOnly/>
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
                <div><span>* </span>Name</div><input type="text" value={""}/>
                <div><span>* </span>Address</div><input type="text" value={""}/>
                <div><span>* </span>City</div><input type="text" value={""}/>
                <div><span>* </span>Post Code</div><input type="text" value={""}/>
                <div><span>* </span>State</div><input type="text" value={""}/>
              </div>
              <div className='acc-btn-main'><button className='acc-btn'>Submit</button></div>
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
    </>
  )
}

export default Account