import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="cal-wrapper">
        <div className="row">
          <Button num="7"/>
          <Button num="8"/>
          <Button num="9"/>
          <Button num="/"/>    
        </div>
        <div className="row">
          <Button num="4"/>
          <Button num="5"/>
          <Button num="6"/>
          <Button num="*"/>    
        </div>
        <div className="row">
          <Button num="1"/>
          <Button num="2"/>
          <Button num="3"/>
          <Button num="+"/>    
        </div>
        <div className="row">
          <Button num="."/>
          <Button num="0"/>
          <Button num="="/>
          <Button num="-"/>    
        </div>
    </div>
    </div>
  );
}

export default App;
