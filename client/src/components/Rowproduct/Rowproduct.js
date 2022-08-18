import React, { useEffect, useState } from "react";
import axios from "axios"
import Productprops from "./Productprops";
import "./Rowproduct.css"
import { Link} from "react-router-dom";


function Rowproduct (){

      const[products,Setproducts]=useState([])
      useEffect(() => {
            async function product(){
                  try {
                      const res = await axios.get("http://localhost:5000/products")
                      Setproducts(res.data.productdata)
      
                  } catch (error) {
                        console.log(error)
                  }
            }
            product();
      }, [])
      

    return(
        <>
          <div className="prod-row">
            
            {products.map(products=>{
                  return(
                        <Link className="productprops" to={`/watches/${products?._id}`}>
                         <Productprops src={products?.images[0].displayimg_url} brand={products?.brand} series={products?.series} price={products?.price} key={products?._id}/>
                        </Link>
                  )
            })}
           
          </div>
        </>
    )
}

export default Rowproduct;