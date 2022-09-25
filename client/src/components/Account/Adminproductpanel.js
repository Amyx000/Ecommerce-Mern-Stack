import React, { useEffect, useState } from 'react'
import {MdOutlineEdit} from "react-icons/md"
import {IoIosCloseCircleOutline} from "react-icons/io"
import {RiDeleteBin6Line} from "react-icons/ri"
import axios from "axios"

function Adminproductpanel() {
    const[showdailog,Setshowdailog]=useState(false)
    const[showdailognew,Setshowdailognew]=useState(false)
    const[product,Setproduct]=useState({})
    const[products,Setproducts]=useState([])
    const[productid,Setproductid]=useState("")
    const[newproduct,Setnewproduct]=useState({})
    const[images,Setimages]=useState([{"displayimg_url":"","productpage_url":""}])

    const dailogfunc= async(id)=>{
        if(showdailog===true){
            Setshowdailog(false)
            Setproductid("")
        }
        else{
            Setproductid(id)
            const res = await axios.get(`http://localhost:5000/products/${id}`,{withCredentials:true})
            Setproduct(res.data.productdata)
            Setshowdailog(true)
        }
    }

    const Newproductdailog = ()=>{
        if(showdailognew===true){
            Setshowdailognew(false)
        }else{
            Setshowdailognew(true)
        }
    }

    // eslint-disable-next-line
    const updateProduct= async()=>{
        try {
            await axios.put(`http://localhost:5000/products/update/${productid}`,product,{withCredentials:true})
            Setshowdailog(false)
        } catch (error) {
            console.log(error)
        }
    }

    // eslint-disable-next-line
    const addProduct= async()=>{
        try {
            await axios.post("http://localhost:5000/products/new",
            {
                "brand":newproduct.brand,
                "series":newproduct.series,
                "modelno":newproduct.modelno,
                "price":newproduct.price,
                "images":{
                    "displayimg_url":images[0].displayimg_url,
                    "productpage_url":images[0].productpage_url
                },
                "gender":newproduct.gender
            },
            {withCredentials:true}
        )
        Setshowdailognew(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handlechangeImgurl =(first,sec)=>{
        if(first){
            product.images[0].displayimg_url=first.target.value
            Setproduct({ ...product });
        }
        if(sec){
            product.images[0].productpage_url=sec.target.value
            Setproduct({ ...product });
        }
    }

    const newproductImg =(first,sec)=>{
        if(first){
            images[0].displayimg_url=first.target.value
            Setimages({...images})
            Setnewproduct(prev=>({...prev,images}))
        }
        if(sec){
            images[0].productpage_url=sec.target.value
            Setimages({...images})
            Setnewproduct(prev=>({...prev,images}))
        }
    }

    // eslint-disable-next-line
    const deleteProduct=async(id)=>{
        await axios.delete(`http://localhost:5000/products/delete/${id}`,{withCredentials:true})
    }
 
    useEffect(() => {
        async function getallproducts(){
              try {
                  const res = await axios.get("http://localhost:5000/allproduct",{withCredentials:true})
                  Setproducts(res.data)
              } catch (error) {
                  console.log(error)
              }
         }
         getallproducts()
         // eslint-disable-next-line
    }, [updateProduct,deleteProduct, addProduct])


  return (
    <>
       <div className="admin-route-main">
            <div className="admin-header">
                <div className='acc-title'>Admin Dashboard - Product</div>
                <button className="acc-btn" onClick={Newproductdailog}>Add Product</button>
            </div>
            <div className="admin-main">
                    <div className="admin-table product-table">
                        <div className="admin-table-head">Product ID</div> <div className="admin-table-head">Product Name</div> <div className="admin-table-head">Price</div> <div className="admin-table-head">Action</div>
                        {products.map(product=>{
                            return(
                                <React.Fragment key={product._id}>
                                        <div>{product._id}</div>
                                        <div>{product.brand} {product.series} {product.modelno}</div>
                                        <div>{product.price}</div>
                                        <div>
                                            <MdOutlineEdit className="edit-icon admin-icon" onClick={()=>dailogfunc(product._id)}/>
                                            <RiDeleteBin6Line className="admin-icon" onClick={()=>deleteProduct(product._id)}/>
                                        </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
            </div>
            {showdailog?<div className="admin-action">
              <div>
                    <div>Update Product</div>
                    <IoIosCloseCircleOutline onClick={dailogfunc}/>
              </div>
              <div>
                    <div>Brand:</div><input type="text" value={product.brand} onChange={e=>Setproduct((prev)=>({...prev,brand:e.target.value}))}></input>
                    <div>Series:</div><input type="text" value={product.series} onChange={e=>Setproduct((prev)=>({...prev,series:e.target.value}))} ></input>
                    <div>Model:</div><input type="text" value={product.modelno} onChange={e=>Setproduct((prev)=>({...prev,modelno:e.target.value}))} ></input>
                    <div>Gender:</div>
                    <select value={product.gender} onChange={e=>Setproduct((prev)=>({...prev,gender:e.target.value}))}>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                    <div>Price:</div><input type="text" value={product.price} onChange={e=>Setproduct((prev)=>({...prev,price:e.target.value}))} ></input>
                    <div>Display Image:</div><input type="text" value={product.images[0].displayimg_url} onChange={e=>handlechangeImgurl(e,null)}></input>
                    <div>Second Image:</div><input type="text" value={product.images[0].productpage_url} onChange={e=>handlechangeImgurl(null,e)}></input>
              </div>
              <div><button className="acc-btn" onClick={updateProduct}>Update</button></div>
           </div>:null}

           {showdailognew?<div className="admin-action">
              <div>
                    <div>Add Product</div>
                    <IoIosCloseCircleOutline onClick={Newproductdailog}/>
              </div>
              <div>
                    <div>Brand:</div><input type="text" value={newproduct.brand} onChange={e=>Setnewproduct((prev)=>({...prev,brand:e.target.value}))}></input>
                    <div>Series:</div><input type="text" value={newproduct.series} onChange={e=>Setnewproduct((prev)=>({...prev,series:e.target.value}))} ></input>
                    <div>Model:</div><input type="text" value={newproduct.modelno} onChange={e=>Setnewproduct((prev)=>({...prev,modelno:e.target.value}))} ></input>
                    <div>Gender:</div>
                    <select value={newproduct.gender} onChange={e=>Setnewproduct((prev)=>({...prev,gender:e.target.value}))}>
                        <option Value={""} disabled selected>Select Gender</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                    <div>Price:</div><input type="text" value={newproduct.price} onChange={e=>Setnewproduct((prev)=>({...prev,price:e.target.value}))} ></input>
                    <div>Display Image:</div><input type="text" value={images[0].displayimg_url} onChange={e=>newproductImg(e,null)}></input>
                    <div>Second Image:</div><input type="text" value={images[0].productpage_url} onChange={e=>newproductImg(null,e)}></input>
              </div>
              <div><button className="acc-btn" onClick={addProduct}>Add</button></div>
           </div>:null}
        </div>
   </>
  )
}

export default Adminproductpanel