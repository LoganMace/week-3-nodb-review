import React, { Component } from 'react';
import './App.css';
import Comic from './components/Comic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comic/>
      </div>
    );
  }
}

export default App;
