import React, { useState, forwardRef, useImperativeHandle } from "react"
import "./Dialog.css"
import {IoClose} from "react-icons/io5"

const Dialog=forwardRef((props, ref)=>{
    const[dialogclss,Setdialogclss]=useState("dialog-hide")


    useImperativeHandle(ref, ()=>({
        openDialog(){
            Setdialogclss("dialog")
        }
    }))


    const closeDialog=()=>{
        Setdialogclss("dialog-hide")
    }
    
    return(
        <div className={dialogclss}>
            <div className="dialog-icon"><IoClose className="dialog-icon-close" onClick={closeDialog}/></div>
            <div className={`dialog-msg ${props.color}`}>{props.msg}</div>
        </div>
    )
})

export default Dialog