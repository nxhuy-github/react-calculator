import React from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: "",
      prevNum: "",
      currNum: "",
      operator: ""
    }
    this.addToInput = this.addToInput.bind(this)
    this.addZeroToInput = this.addZeroToInput.bind(this)
    this.addDecimal = this.addDecimal.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.add = this.add.bind(this)
    this.evaluate = this.evaluate.bind(this)
  }

  addToInput(val) {
    //console.log("Clicked!")
    this.setState((prevState) => {
      return {
        input: prevState.input + val
      }
    })
  }

  addZeroToInput(val){
    if (this.state.input !== "") {
      this.setState({input: this.state.input + val})
    }
  }

  addDecimal(val){
    if (this.state.input.indexOf(".") === -1) {
      this.setState({input: this.state.input + val})
    }
  }

  clearInput(){
    this.setState({input: ""})
  }

  add(val){
    this.state.prevNum = this.state.input
    this.setState({input: ""})
    this.state.operator = "plus"
  }

  evaluate(){
    this.state.currNum = this.state.input
    if (this.state.operator === "plus") {
      let result = parseFloat(this.state.prevNum) + parseFloat(this.state.currNum)
      this.setState({input: String(result)})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="cal-wrapper">
          <div className="row">
            <Input input={this.state.input}/>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} num="7"/>
            <Button handleClick={this.addToInput} num="8"/>
            <Button handleClick={this.addToInput} num="9"/>
            <Button num="/"/>    
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} num="4"/>
            <Button handleClick={this.addToInput} num="5"/>
            <Button handleClick={this.addToInput} num="6"/>
            <Button num="*"/>    
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} num="1"/>
            <Button handleClick={this.addToInput} num="2"/>
            <Button handleClick={this.addToInput} num="3"/>
            <Button handleClick={this.add} num="+"/>    
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal} num="."/>
            <Button handleClick={this.addZeroToInput} num="0"/>
            <Button handleClick={this.evaluate} num="="/>
            <Button num="-"/>    
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput} />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
