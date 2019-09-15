import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div className="button">
      {props.num}
    </div>
  )
}

export default Button