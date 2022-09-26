import React from "react"
import { Link, Route, Routes } from "react-router-dom";
import "./Admin.css"
import Adminorderpanel from "./Adminorderpanel";
import Adminproductpanel from "./Adminproductpanel";
import Adminuserpanel from "./Adminuserpanel";

function Adminpanel (){
       
    return(
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='acc-title'>Admin Dashboard</div>
                        <div className="admin">
                            <div><Link className="link" to={"product"}><div className="admin-div">Product (20)</div></Link></div>
                            <div><Link className="link" to={"order"}><div className="admin-div">Order (5)</div></Link></div>
                            <div><Link className="link" to={"user"}><div className="admin-div">User (10)</div></Link></div>
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