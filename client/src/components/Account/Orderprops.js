import React from 'react'

function Orderprops(props) {
  return (
    <>
        <div className='order-main-div1'><img className='order-main-img' src={props.img} alt=''></img></div>
        <div className='order-main-div2'>
        <div>{props.name}</div><div className="order-main-des">Order placed on {props.date}</div>
        </div>
        <div className='order-main-div3'>{props.status}</div>
    </>
  )
}

export default Orderprops