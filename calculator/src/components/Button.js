import React from 'react'
import './Button.css'

class Button extends React.Component {
  
  isOperator(val) {
    return !isNaN(val) || val === "." || val === "="
  }
  
  render() {
    return (
      <div 
        className={`button ${this.isOperator(this.props.num) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.num)}
      >
        {this.props.num}
      </div>
    )
  }
}

export default Button