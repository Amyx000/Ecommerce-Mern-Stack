import React, { useEffect, useState } from "react"
import "./Product.css"
import {useLocation} from "react-router-dom"
import {BsTruck} from "react-icons/bs"
import {RiStarSmileLine} from "react-icons/ri"
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import axios from "axios"
import {useDispatch} from "react-redux"
import { addProduct } from "../../Redux/Reducers/cartReducer"

function Product(){
    const dispatch = useDispatch()
    const location = useLocation();
    const [product,Setproduct]=useState([])
    const [prodimg,Setprodimg]=useState()
    const product_id = location.pathname.split("watches/")[1]

    useEffect(() => {
       async function getproductdetails () {
        try {
            const res = await axios.get(`http://localhost:5000/products/${product_id}`)
            Setproduct(res.data.productdata)
            Setprodimg(res.data.productdata.images[0]?.productpage_url)
        } catch (error) {
            console.log(error)
        }
      }
      getproductdetails();
    }, [product_id])

    const handleClick = ()=>{
        dispatch(addProduct({product, price:product.price}));
    }
    
    return(
        <>
        <div className="product-contain">
            <div className="productside">
                <img className="product-img" src={prodimg} alt=""></img>
            </div>
            <div className="product-info">
                <div className="name">{product?.brand}</div>
                <div className="series">{product?.series}</div>
                <div className="model">{product?.modelno}v</div>
                <div className="price">MRP ₹ {product?.price}</div>
                <div className="price-details">*Inclusive of all taxes</div>
                <div className="price-details">EMI from ₹ {Math.round(product?.price/12)}</div>
                <div><button className="addtocart" onClick={handleClick}>Add to Cart</button></div>
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