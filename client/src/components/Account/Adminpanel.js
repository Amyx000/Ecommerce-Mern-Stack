import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom";
import "./Admin.css"
import Adminorderpanel from "./Adminorderpanel";
import Adminproductpanel from "./Adminproductpanel";
import Adminuserpanel from "./Adminuserpanel";

function Adminpanel (){
       const[counts,Setcounts]=useState({
        "userlength": 0,
        "productlength": 0,
        "orderlength": 0
    })

    useEffect(()=>{
        async function getcounts(){
           try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcounts`,{withCredentials:true})
            Setcounts(res.data)
           } catch (error) {
            console.log(error.response)
           }
        }
        getcounts()
    },[])

    return(
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='acc-title'>Admin Dashboard</div>
                        <div className="admin">
                            <div><Link className="link" to={"product"}><div className="admin-div">Product {`(${counts.productlength})`}</div></Link></div>
                            <div><Link className="link" to={"order"}><div className="admin-div">Order {`(${counts.orderlength})`}</div></Link></div>
                            <div><Link className="link" to={"user"}><div className="admin-div">User {`(${counts.userlength})`}</div></Link></div>
                        </div>
                    </>
                }/>
                <Route path="/product" element={
                    <Adminproductpanel/>
                }/>

                <Route path="/user" element={
                    <Adminuserpanel/>
                }/>

                <Route path="/order" element={
                   <Adminorderpanel/>
                }/>

            </Routes>
        </>
    )
}

export default Adminpanel;