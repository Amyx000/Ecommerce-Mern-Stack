import React, { useEffect, useState } from "react";
import axios from "axios"
import Productprops from "./Productprops";
import "./Rowproduct.css"


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
            {/* <div className="filterprod">
                  <img className="filterprod-img" src="https://media.casioindiashop.com/assets/products-images/thumb-image/EX526.webp" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div>

            <div className="filterprod">
                  <img className="filterprod-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/a/r/arnold-son-eight-day-1-edas-u01c-s136d.jpg" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div>

            <div className="filterprod">
                  <img className="filterprod-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/b/r/bremont-airco-mach-3-airco-m3-bl-b.jpg" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div>

            <div className="filterprod">
                  <img className="filterprod-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/b/r/breitling-professional-x82310d91b1s1.jpg" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div>

            <div className="filterprod">
                  <img className="filterprod-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/t/i/tissot-t-sport-t100-427-36-201-00.jpg" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div>

            <div className="filterprod">
                  <img className="filterprod-img" src="https://cdn1.ethoswatches.com/media/catalog/product/cache/06b0325fe0d1ea074c67035fe5935845/c/a/carl-f-bucherer-manero-00-10919-08-13-21.jpg" alt=""></img>
                  <div className="filterprod-details">
                        <div className="fd-brand">Casio</div>
                        <div className="fd-model">Edifice</div>
                        <div className="fd-price">₹ 17,500</div>
                        <div className="fd-overlay"></div>
                  </div>
            </div> */}

            {products.map(products=>{
                  return(
                        <Productprops src={products?.images[0].displayimg_url} brand={products?.brand} series={products?.series} price={products?.price}/>
                  )
            })}
           
          </div>
        </>
    )
}

export default Rowproduct;