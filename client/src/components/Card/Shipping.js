import React, { useState } from 'react'
import "./Cart.css"
import "./Shipping.css"
import { useSelector } from 'react-redux'
import Message from '../Dialog Box/Message'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Shipping() {
    const navigate=useNavigate()
    const cart = useSelector(state=>state.cart)
    const address = useSelector(state=>state.user.userdata.address)
    const[updateadd,Setupdateadd]=useState({})
    const[err,Seterr]=useState(false)

    const checkoutFunc = async()=>{
        if(address.shipname){navigate("/cart/checkout")}
        else if(!updateadd.shipname||!updateadd.street||!updateadd.city||!updateadd.postcode||!updateadd.state){
            Seterr(true)
        }else{
            Seterr(false)
            try {
                await axios.post("http://localhost:5000/account/addresses",{
                  shipname:updateadd.shipname,
                  street:updateadd.street,
                  city:updateadd.city,
                  postcode:updateadd.postcode,
                  state:updateadd.state
                },{withCredentials: true})
                Setupdateadd({})
                navigate("/cart/checkout")
                
              } catch (error) {
                console.log(error)
              }
        }
    }

  return (
    <>
        <div className="cart-main">
            <div className="cart-left">
                <div className="cart-items">Shipping details</div>
                <>
                <div className=''>
                    {!address.shipname?
                    <>
                        <div className='acc-title'>Add Address</div>
                        {err?<Message msg={"Enter all shipping details !"} cls={"msg-color-r msg-mt-10 msg-center"}/>:null}
                  <div className='profile-main shipping'>
                   <div><span>* </span>Name</div><input type="text" value={updateadd.shipname} onChange={e=>Setupdateadd(prev=>({...prev,shipname:e.target.value}))}/>
                   <div><span>* </span>Street</div><input type="text" value={updateadd.street} onChange={e=>Setupdateadd(prev=>({...prev, street:e.target.value}))} />
                   <div><span>* </span>City</div><input type="text" value={updateadd.city} onChange={e=>Setupdateadd(prev=>({...prev, city:e.target.value}))}/>
                   <div><span>* </span>Post Code</div><input type="text" value={updateadd.postcode} onChange={e=>Setupdateadd(prev=>({...prev, postcode:e.target.value}))}/>
                   <div><span>* </span>State</div>
                   <select value={updateadd.state} onChange={e=>Setupdateadd(prev=>({...prev, state:e.target.value}))}>
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
                    </>:
                    <>
                        <div>Default:</div>
                        <div className='add-block'>
                            <div>{address.shipname},</div>
                            <div>{address.city}, {address.postcode}</div>
                            <div>{address.street},</div>
                            <div>{address.state}</div>
                        </div>
                    </>}
                </div>
                </>
            </div>
            <div className="cart-right">
                <div className="cart-r-price cart-pad">
                    <div>Sub-Total:</div>
                    <div>₹ {cart.total}</div>
                </div>
                <div className="cart-r-price cart-pad">
                    <div>Tax: 9%</div>
                    <div>₹ {Math.round(cart.total*0.09)}</div>
                </div>
                <div className="cart-r-price cart-pad">
                <div>Total:</div>
                    <div>₹ {Math.round(cart.total*1.09)}</div>
                </div>
                
                <div>
                    <button className="proceed cart-btn" onClick={checkoutFunc}>Checkout</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shipping