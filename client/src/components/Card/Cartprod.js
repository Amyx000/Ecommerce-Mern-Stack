import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"

function Cartprod(props) {
  return (
    <>
     <div className='cart-rc cart-props'>
        <div className='cartprod-left'>
            <div><img src={props.img} alt=""></img></div>
            <div>
                <div>{props.name}</div>
                <div className='cartprod-left-down'>
                    <div className='cartprod-left-down-in'><RiDeleteBin6Line/> Remove</div>
                    <div className='cartprod-left-down-in'><AiFillHeart/> Add to Wishlist</div>
                </div>
            </div>
        </div>
        <div>₹ {props.price}</div>
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
    </>
  )
}

export default Cartprod