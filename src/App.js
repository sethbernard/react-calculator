import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
