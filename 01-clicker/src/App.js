import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clicker from './components/Clicker';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hey, I'm clicker</h1>
        </header>
      <Clicker/>
      </div>
    );
  }
}

export default App;
