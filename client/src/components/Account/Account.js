import React from 'react'
import "./Account.css"
import {Routes, Route, Link} from "react-router-dom"

function Account() {
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
                    <div className='acc-name'>Arman Kazi</div>
                    <div>armankazi111@gmail.com</div>
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
                <div>Name:</div><input type="text" value={"Arman Kazi"}/>
                <div>Email:</div><input className='input-disabled' type="text" value={"test123@gmail.com"} readOnly/>
                <div>Mobile:</div><input className='input-disabled' type="text" value={987654321} readOnly/>
              </div>
              <div className='acc-btn-main'><button className='acc-btn'>Update</button></div>
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