import React from 'react'

const Input = (props) => {
  return (
    <input {...props} onChange={props.handleChange}/>
  )
}

export default Input
