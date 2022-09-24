import React, { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios"
import "./Admin.css"
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"
import {IoIosCloseCircleOutline} from "react-icons/io"
import Adminuserprops from "./Adminuserprops";
import Adminorderpanel from "./Adminorderpanel";

function Adminpanel (){
    const [showdailog,Setshowdailog]=useState(false)
    const [users,Setusers]=useState([])
    const[userid,Setuserid]=useState("")
    const [user,Setuser]=useState({})

    const dailogfunc= async(id)=>{
        if(showdailog===true){
            Setshowdailog(false)
            Setuserid("")
        }
        else{
            Setuserid(id)
            const res = await axios.get(`http://localhost:5000/account/${id}`,{withCredentials:true})
            Setuser(res.data)
            Setshowdailog(true)
        }
    }

    const updateuser =async ()=>{
        await axios.put(`http://localhost:5000/account/${userid}`,{userType:user.userType},{withCredentials:true})
        Setshowdailog(false)
    }

    const deleteuser= async(id)=>{
        await axios.delete(`http://localhost:5000/account/${id}`,{withCredentials:true})
    }

    useEffect(() => {
      async function getalluser(){
            try {
                const res = await axios.get("http://localhost:5000/users",{withCredentials:true})
                Setusers(res.data)
            } catch (error) {
                console.log(error)
            }
       }
       getalluser()
    }, [updateuser,deleteuser])
    

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
                     <div className="admin-route-main">
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
                            <div className="admin-action">
                                
                            </div>
                     </div>
                    </>
                }/>

                <Route path="/user" element={
                    <>
                    <div className="admin-route-main">
                     <div className="admin-header">
                            <div className='acc-title'>Admin Dashboard - User</div>
                     </div>
                     <div className="admin-main">
                            <div className="admin-table user-table">
                               <div className="admin-table-head">User ID</div> <div className="admin-table-head">User Name</div> <div className="admin-table-head">Email</div> <div className="admin-table-head">Role</div> <div className="admin-table-head">Action</div>
                                {users.map(user=>{
                                    return(
                                        <Adminuserprops
                                            id={user._id}
                                            name={user.name}
                                            email={user.email}
                                            role={user.userType}
                                            editfunc={()=>dailogfunc(user._id)}
                                            dltfunc={()=>deleteuser(user._id)}
                                            key={user._id}
                                        />
                                    )
                                })}
                               
                            </div>
                     </div>
                     {showdailog?<div className="admin-action">
                              <div>
                                    <div>Update User</div>
                                    <IoIosCloseCircleOutline onClick={dailogfunc}/>
                              </div>
                              <div>
                                    <div>Name:</div><div>{user?.name}</div>
                                    <div>Email:</div><div>{user?.email}</div>
                                    <div>Role:</div>
                                    <select value={user?.userType} onChange={e=>Setuser(prev=>({...prev, userType:e.target.value}))}>
                                        <option value={"buyer"}>Buyer</option>
                                        <option value={"admin"}>Admin</option>
                                    </select>
                              </div>
                              <div><button className="acc-btn" onClick={updateuser}>Update</button></div>
                     </div>:null}
                    </div>
                    </>
                }/>

                <Route path="/order" element={
                   <Adminorderpanel/>
                }/>

            </Routes>
        </>
    )
}

export default Adminpanel;