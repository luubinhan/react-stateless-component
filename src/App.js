import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Price from './Price';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Price price='100000' salePrice='20000' />
        </header>
      </div>
    );
  }
}

export default App;
