import React, { Component } from 'react';
import './App.css';
import { InputLengths } from './components/InputLengths.component';
import { DisplayTriangleType } from './components/DisplayTriangleType.component';
import { Header} from './components/Header.component';
import {Instructions} from './components/Instructions.component';
import {Error} from './components/Error.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      type: '',
      error: null
    };
    this.setTriangleType = this.setTriangleType.bind(this);
    this.setError = this.setError.bind(this);
  }

  setTriangleType(type){
    this.setState({error: null, ...type})
  }
  setError(error){
    this.setState({...error})
  }

  render() {
    return <div className='App'>
      <Header/>
      <Instructions />
      <div className={'form-wrapper'}>
        <InputLengths setTriangleType={this.setTriangleType} setError={this.setError}/>
      </div>
      {this.state.type && !this.state.error && <DisplayTriangleType type={this.state.type}/>}
      {this.state.error !== null && <Error className={'error'} error={this.state.error}/>}
    </div>;
  }
}

export default App;
