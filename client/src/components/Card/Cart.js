import React from "react"
import "./Cart.css"
import {RiPercentFill} from "react-icons/ri"
import Cartprod from "./Cartprod";

function Cart (){
    return(
        <div className="cart-main">
            <div className="cart-left">
                <div className="cart-items">Items:</div>
                <div className="cart-rc">
                    <div>PRODUCT</div><div>PRICE</div><div>QUANTITY</div>
                   
                </div>
                <Cartprod className="cartprod" img={"https://images.bestsellerclothing.in/data/JJ/sep-9-2021/246286802_g1.jpg?width=47&height=47&mode=fill&fill=blur&format=auto"}
                    name={"Orange Striped Full Sleeves Shirt"} price={20000}
                />
                <Cartprod className="cartprod" img={"https://images.bestsellerclothing.in/data/JJ/sep-9-2021/246286802_g1.jpg?width=47&height=47&mode=fill&fill=blur&format=auto"}
                    name={"Orange Striped Full Sleeves Shirt"} price={20000}
                />
                <Cartprod className="cartprod" img={"https://images.bestsellerclothing.in/data/JJ/sep-9-2021/246286802_g1.jpg?width=47&height=47&mode=fill&fill=blur&format=auto"}
                    name={"Orange Striped Full Sleeves Shirt"} price={20000}
                />
                
            </div>
            <div className="cart-right">
                <div className="cart-r-price cart-pad">
                    <div>Sub-Total:</div>
                    <div>₹ 12000</div>
                </div>
                <div className="cart-r-price cart-pad">
                <div>Total:</div>
                    <div>₹ 16000</div>
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
                    <button className="proceed cart-btn">Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;