import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignIn from './SignIn/SignIn.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Adventure Planner</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SignIn />
      </div>
    );
  }
}

export default App;
