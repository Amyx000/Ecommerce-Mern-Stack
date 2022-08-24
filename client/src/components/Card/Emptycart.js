import React from 'react'
import {CgCloseO} from "react-icons/cg"
import {Link} from "react-router-dom"

function Emptycart() {
  return (
    <>
        <div className='emptycart'>
            <CgCloseO className='emptycart-icon'/>
            <div className='emptycart-title'>Your shopping cart is empty!</div>
             <Link to={"/"}><button className='emptycart-btn'>Continue</button></Link>
        </div>
    </>
    
  )
}

export default Emptycart