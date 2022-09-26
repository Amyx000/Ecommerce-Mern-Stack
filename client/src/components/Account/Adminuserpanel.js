import React, { useEffect, useState } from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"
import {IoIosCloseCircleOutline} from "react-icons/io"
import axios from 'axios'

function Adminuserpanel(props) {

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

  // eslint-disable-next-line
  const updateuser =async ()=>{
        await axios.put(`http://localhost:5000/account/${userid}`,{userType:user.userType},{withCredentials:true})
        Setshowdailog(false)
  }

  // eslint-disable-next-line
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
     // eslint-disable-next-line
  }, [updateuser,deleteuser])
 

  return (
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
                          <React.Fragment key={user._id}>
                               <div>{user._id}</div>
                               <div>{user.name}</div>
                               <div>{user.email}</div>
                               <div>{user.userType}</div>
                               <div>
                                  <MdOutlineEdit className="edit-icon admin-icon" onClick={()=>dailogfunc(user._id)}/>
                                  <RiDeleteBin6Line className="admin-icon" onClick={()=>deleteuser(user._id)}/>
                               </div>
                          </React.Fragment>
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
  )
}

export default Adminuserpanel