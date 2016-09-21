import React, { Component } from 'react';
import './App.css';

import SignIn from './SignIn/SignIn.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Adventure Planner</h2>
        </div>
        <SignIn />
      </div>
    );
  }
}

export default App;
