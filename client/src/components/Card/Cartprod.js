import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import {useSelector, useDispatch} from "react-redux"
import { removeProduct } from '../../Redux/Reducers/cartReducer'

function Cartprod(props) {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  
  return (
    <>
    {cart.products.map((product)=>{
      return(
        <div className='cart-rc cart-props'>
        <div className='cartprod-left'>
            <div><img className='cart-img' src={product.images[0].displayimg_url} alt=""></img></div>
            <div>
                <div className='cartprod-left-top'>{`${product.brand} ${product.modelno}`}</div>
                <div className='cartprod-left-down'>
                    <div className='cartprod-left-down-in' onClick={()=>{
                      dispatch(removeProduct({product:product._id,price:product.price}))
                      console.log(product?._id)
                    }}><RiDeleteBin6Line/> Remove</div>
                    <div className='cartprod-left-down-in'><AiFillHeart/> Add to Wishlist</div>
                </div>
            </div>
        </div>
        <div>₹ {product.price}</div>
        <div><select className='cart-select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select></div>
      </div>
      )
    })}
    </>
  )
}

export default Cartprod