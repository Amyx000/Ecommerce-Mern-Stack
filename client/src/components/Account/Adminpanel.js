import React from "react"
import { Link, Route, Routes } from "react-router-dom";
import "./Admin.css"
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"

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
                    <>
                     <div className="admin-header">
                        <div className='acc-title'>Admin Dashboard - Product</div>
                        <button className="acc-btn">Add Product</button>
                     </div>
                     <div className="admin-main">
                            <div className="admin-table product-table">
                                <div className="admin-table-head">Product ID</div> <div className="admin-table-head">Product Name</div> <div className="admin-table-head">Price</div> <div className="admin-table-head">Action</div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Rolex Daytona</div> <div>750000</div> <div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                            </div>
                     </div>
                    </>
                }/>

                <Route path="/user" element={
                    <>
                     <div className="admin-header">
                            <div className='acc-title'>Admin Dashboard - User</div>
                     </div>
                     <div className="admin-main">
                            <div className="admin-table user-table">
                                <div className="admin-table-head">User ID</div> <div className="admin-table-head">User Name</div> <div className="admin-table-head">Email</div> <div className="admin-table-head">Action</div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Arman Kazi</div> <div>armankazi111@gmail.com</div><div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Arman Kazi</div> <div>armankazi111@gmail.com</div><div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Arman Kazi</div> <div>armankazi111@gmail.com</div><div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Arman Kazi</div> <div>armankazi111@gmail.com</div><div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                            </div>
                     </div>
                    </>
                }/>

                <Route path="/order" element={
                    <>
                     <div className="admin-header">
                            <div className='acc-title'>Admin Dashboard - User</div>
                     </div>
                     <div className="admin-main">
                            <div className="admin-table order-table">
                                <div className="admin-table-head">Order ID</div> <div className="admin-table-head">Status</div> <div className="admin-table-head">Amount</div> <div className="admin-table-head">Action</div>
                                <div>632b6b3e959f6dd10b9972df</div> <div>Processing</div> <div>35000</div> <div><MdOutlineEdit className="edit-icon admin-icon"/><RiDeleteBin6Line className="admin-icon"/></div>
                               
                            </div>
                     </div>
                    </>
                }/>

            </Routes>
        </>
    )
}

export default Adminpanel;