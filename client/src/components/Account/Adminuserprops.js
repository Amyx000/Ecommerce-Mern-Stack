import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {MdOutlineEdit} from "react-icons/md"

function Adminuserprops(props) {
  return (
    <>
        <div>{props.id}</div> <div>{props.name}</div> <div>{props.email}</div> <div>{props.role}</div> <div><MdOutlineEdit className="edit-icon admin-icon" onClick={props.editfunc}/><RiDeleteBin6Line className="admin-icon" onClick={props.dltfunc}/></div>
    </>
  )
}

export default Adminuserprops