import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar';

class App extends Component {
  _change = (e, value) => {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Avatar name="anluu binh" />
        </header>
      </div>
    );
  }
}

export default App;
