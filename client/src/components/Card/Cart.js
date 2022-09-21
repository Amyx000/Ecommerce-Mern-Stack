import React, { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import "./Cart.css"
import {RiPercentFill} from "react-icons/ri"
import Cartprod from "./Cartprod";
import ClockLoader from "react-spinners/ClockLoader"
import Emptycart from "./Emptycart";
import { Link } from "react-router-dom";

function Cart (){
    const cart = useSelector(state=>state.cart)
    const [loading, setLoading] = useState(false);
    const loader = ()=>{
        setLoading(true)
            setTimeout(()=>{
              setLoading(false)
            },1000)
   }

  useEffect(() => {
    loader()
}, [])

    return(
        <>
        {cart.quantity===0?<Emptycart/>:
        <>
        {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:
        <div className="cart-main">
            <div className="cart-left">
                <div className="cart-items">Items:</div>
                <div className="cart-rc">
                    <div>PRODUCT</div><div>PRICE</div><div>QUANTITY</div>
                   
                </div>
                        <Cartprod/>
            </div>
            <div className="cart-right">
                <div className="cart-r-price cart-pad">
                    <div>Sub-Total:</div>
                    <div>₹ {cart.subtotal}</div>
                </div>
                <div className="cart-r-price cart-pad">
                    <div>Tax: 9%</div>
                    <div>₹ {Math.round(cart.subtotal*0.09)}</div>
                </div>
                <div className="cart-r-price cart-pad">
                <div>Total:</div>
                    <div>₹ {Math.round(cart.total)}</div>
                </div>
                <div>
                    <div>
                        <div className="cart-pad cart-coup">Coupon Code:</div>
                        <div className="coupon-field">
                            <RiPercentFill/>
                            <input className="coupon-input" placeholder="Enter your coupon code"/>
                            <button className="cart-btn">Apply Coupon</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Link className="links" to={"shipping"}><button className="proceed cart-btn">Proceed Next</button></Link>
                </div>
            </div>
        </div>}</>
        }
        </>
    )
}

export default Cart;