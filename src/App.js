import React, { Component } from 'react';
import Character from '../src/components/containers/Character/Character'
import Teste from '../src/components/containers/Teste/Teste'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Character /> */}
        <Teste/>
      </div>
    );
  }
}

export default App;
