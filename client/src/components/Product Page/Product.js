import React from "react"
import "./Product.css"
import {BsTruck} from "react-icons/bs"
import {RiStarSmileLine} from "react-icons/ri"
import {MdOutlineMiscellaneousServices} from "react-icons/md"

function Product(){
    return(
        <>
        <div className="product-contain">
            <div>
                <img className="product-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/c/o/corum-admiral-082-202-42-v800-pn12-multiple-1.jpg" alt=""></img>
            </div>
            <div className="product-info">
                <div className="name">Corum</div>
                <div className="series">Admiral 38 Automatic</div>
                <div className="model">082.202.42/V800 PN12</div>
                <div className="price">MRP ₹ 6,71,000</div>
                <div className="price-details">*Inclusive of all taxes</div>
                <div className="price-details">EMI from ₹ 59932</div>
                <div><button className="addtocart">Add to Cart</button></div>
                <div className="product-endline">

                    <RiStarSmileLine className="end-icon"/>
                    <div>100% Genuine Product</div>

                    <MdOutlineMiscellaneousServices className="end-icon"/>
                    <div>Service Facilities</div>

                    <BsTruck className="end-icon"/>
                    <div>Home Delivery Across India</div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;