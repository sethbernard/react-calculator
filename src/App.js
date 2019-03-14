import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import * as math from 'mathjs';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="Display">
          <Display />
        </div>
        <Buttons />
      </div>
    );
  }
}

export default App;
