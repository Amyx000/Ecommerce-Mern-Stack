import React, { useEffect, useState } from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"
import {IoIosCloseCircleOutline} from "react-icons/io"
import axios from 'axios'

function Adminorderpanel() {
    const[showdailog,Setshowdailog]=useState(false)
    const[order,Setorder]=useState({})
    const[orders,Setorders]=useState([])
    const[orderid,Setorderid]=useState("")

    const dailogfunc= async(id)=>{
        if(showdailog===true){
            Setshowdailog(false)
            Setorderid("")
        }
        else{
            Setorderid(id)
            const res = await axios.get(`http://localhost:5000/order/${id}`,{withCredentials:true})
            Setorder(res.data)
            Setshowdailog(true)
        }
    }

    const updateStatus=()=>{

    }

    useEffect(() => {
        async function getallorders(){
              try {
                  const res = await axios.get("http://localhost:5000/allorders",{withCredentials:true})
                  Setorders(res.data.orders)
              } catch (error) {
                  console.log(error)
              }
         }
         getallorders()
    }, [])


  return (
    <>
      <div className="admin-route-main">
        <div className="admin-header">
            <div className='acc-title'>Admin Dashboard - Order</div>
        </div>
        <div className="admin-main">
                <div className="admin-table order-table">
                    <div className="admin-table-head">Order ID</div> <div className="admin-table-head">Product</div> <div className="admin-table-head">Quantity</div> <div className="admin-table-head">Status</div> <div className="admin-table-head">Action</div>
                        {orders.map(multiorder=>{
                            return(
                                multiorder.orderitems.map(order=>{
                                    return(
                                        <>
                                            <div>{order._id}</div>
                                            <div>{`${order.product.brand} ${order.product.modelno}`}</div>
                                            <div>{order.quantity}</div>
                                            <div>{order.orderstatus}</div>
                                            <div>
                                            <MdOutlineEdit className="edit-icon admin-icon" onClick={()=>dailogfunc(order._id)}/>
                                            <RiDeleteBin6Line className="admin-icon"/>
                                            </div>
                                         </>
                                    )
                                })
                            )
                        })}
                </div>
        </div>
        {showdailog?<div className="admin-action">
              <div>
                    <div>Update Order</div>
                    <IoIosCloseCircleOutline onClick={dailogfunc}/>
              </div>
              <div>
                    <div>Brand:</div><div>{order.orderitems[0].product.brand}</div>
                    <div>Series:</div><div>{order.orderitems[0].product.series}</div>
                    <div>Model:</div><div>{order.orderitems[0].product.modelno}</div>
                    <div>User:</div><div>{order.user.email}</div>
                    <div>Address:</div><div>{order.address.street}</div>
                    <div>Status:</div>
                    <select value={order.orderitems.orderstatus} onChange={e=>Setorder(prev=>({...prev, "orderitems.orderstatus":e.target.value}))}>
                        <option value={"Processing"}>Processing</option>
                        <option value={"Dispatch"}>Dispatch</option>
                        <option value={"Shipped"}>Shipped</option>
                        <option value={"On the way"}>On the way</option>
                        <option value={"Delivered"}>Delivered</option>
                    </select>
              </div>
              <div><button className="acc-btn" onClick={updateStatus}>Update</button></div>
         </div>:null}
        </div>
   </>
  )
}

export default Adminorderpanel