import React from 'react'

export const Button = (props) => {
  return (
    <div className = "bg-blue-400 text-white rounded-full px-5 py-2 ">{props.text}</div>
  )
}

export default Button