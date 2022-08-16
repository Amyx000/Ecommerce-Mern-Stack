import React from 'react'

function Productprops(props) {
  return (
    <div className="filterprod">
        <img className="filterprod-img" src={props.src} alt=""></img>
        <div className="filterprod-details">
            <div className="fd-brand">{props.brand}</div>
            <div className="fd-model">{props.series}</div>
            <div className="fd-price">₹ {props.price}</div>
            <div className="fd-overlay"></div>
        </div>
</div>
  )
}

export default Productprops