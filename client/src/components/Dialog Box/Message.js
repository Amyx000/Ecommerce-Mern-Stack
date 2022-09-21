import React from 'react'
import "./Message.css"

function Message(props) {
  return (
    <div className={props.cls}>{props.msg}</div>
  )
}

export default Message