import React, { useEffect, useState } from "react";
import axios from "axios"
import Productprops from "./Productprops";
import "./Rowproduct.css"
import { Link} from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader"


function Rowproduct (){
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
                      const res = await axios.get("http://localhost:5000/products")
                      Setproducts(res.data.productdata)
                      loader()
      
                  } catch (error) {
                        console.log(error)
                  }
            }
            product();
      }, [])
      
      
     //test filter
      const brand = ["Panerai", "Rado", "Tissot", "Grand Seiko",]
      const filgen =["Male"]
      const price =[100000]

     const newprod=products.filter((item)=>{
           return (brand.includes(item.brand) && filgen.includes(item.gender) && item.price<price?.[0])
     })   
     console.log(newprod)    
      

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