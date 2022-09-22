import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import logo from "../../assets/logo.png"
import {TiTick} from "react-icons/ti"
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate()
    const cart = useSelector(state=>state.cart)
    const userdata = useSelector(state=>state.user.userdata)
    let orderitems=[]
  const [loading, setLoading] = useState(false);

    const orderproductsfunc = ()=>{
        cart.products.forEach(product=>{
            orderitems.push(
                {
                    "product":product._id,
                    "quantity":1,
                    "price":product.price
                }
            )
        })
    }
    orderproductsfunc()

    const loader = ()=>{
        setLoading(true)
            setTimeout(()=>{
              navigate("/")
              setLoading(false)
        },2000)
    }

    useEffect(() => {
        async function getdata(){
            const {data:{key}} = await axios.get("http://localhost:5000/getkey",{withCredentials:true})
            const {data:{id}} = await axios.post("http://localhost:5000/order/checkout",{amount:cart.total},{withCredentials:true})
            const options = {
                key:key, // Enter the Key ID generated from the Dashboard
                amount: cart.total*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Folex",
                description: "Test Transaction",
                image: logo,
                order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler:async (response)=>{
                    try {
                        await axios.post("http://localhost:5000/order/checkout/payment",
                        
                        {
                            "user":userdata.userid,
                            "address":{
                              "shipname": userdata.address.shipname,
                              "street": userdata.address.street,
                              "city": userdata.address.city,
                              "postcode": userdata.address.postcode,
                              "state": userdata.address.state
                            },
                            orderitems,
                            "paymentdetails":response
                        },
                        {withCredentials:true}
                    )
                    loader()
                    } catch (error) {
                            console.log(error)
                    }
                },
                prefill: {
                    name: "Gaurav Kumar",
                    email: "abc@gmail.com",
                    contact: ""
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "bisque"
                }
            };
            const razor = new window.Razorpay(options);
                razor.open();

        }
        getdata();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div className='checkout'>
        {loading?<div className='order-success'><TiTick className='tick'/> Order Placed Successfully</div>:null}
    </div>
  )
}

export default Checkout