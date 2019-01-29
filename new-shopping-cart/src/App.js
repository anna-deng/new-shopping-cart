import React, { Component } from 'react';
import './App.css';
import Options from './components/options.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className='title'>THE SHOP</h1>
          <Options/>
      </div>
    );
  }
}

export default App;
