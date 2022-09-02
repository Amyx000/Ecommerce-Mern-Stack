import React, { useEffect, useState } from "react";
import axios from "axios"
import Productprops from "./Productprops";
import "./Rowproduct.css"
import {Link, useLocation} from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader"
import { showProductdata } from "../../Redux/Reducers/productReducer";
import {useDispatch} from "react-redux"


function Rowproduct ({gender,price,brand,sort}){
      const dispatch =useDispatch()
      const location =useLocation()
      const [loading, setLoading] = useState(false);
      const[products,Setproducts]=useState([])

      const loader = ()=>{
            setLoading(true)
                setTimeout(()=>{
                  setLoading(false)
                },1000)
      }

      useEffect(() => {
            async function product(){

                  try {
                      const res = await axios.get(`http://localhost:5000/products${location.search}`)
                      Setproducts(res.data.productdata)
                      dispatch(showProductdata(products.length))
                      loader()
      
                  } catch (error) {
                        console.log(error)
                  }
            }
            product();
      }, [location.search,dispatch,products.length])
      

    return(
        <>
        {loading?<ClockLoader className='clockloader' color={"#8C6B20"} loading={loading} size={150} speedMultiplier={2} />:

         <div className="prod-row"> 
                  {products.map(products=>{
                        return(
                              <Link className="productprops" to={`/watches/${products?._id}`}>
                              <Productprops src={products?.images[0].displayimg_url} brand={products?.brand} series={products?.series} price={products?.price} key={products?._id}/>
                              </Link>
                        )
                  })}
          </div>}
        </>
    )
}

export default Rowproduct;