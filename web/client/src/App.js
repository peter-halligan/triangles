import React, { Component } from 'react';
import './App.css';
import { InputLengths } from "./components/InputLengths.component";
import { DisplayTriangleType } from "./components/DisplayTriangleType.component";
import { Header} from "./components/Header.component";
import {Instructions} from "./components/Instructions.component";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      type: ''
    };
    this.setTriangleType = this.setTriangleType.bind(this);
  }

  setTriangleType(type){
    this.setState({...type})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        <div className={"form-wrapper"}>
        <InputLengths setTriangleType={this.setTriangleType}/>
        </div>
        {this.state.type && <DisplayTriangleType type={this.state.type}/>}
      </div>
    );
  }
}

export default App;
