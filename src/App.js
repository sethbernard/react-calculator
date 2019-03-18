import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import * as math from 'mathjs';

class App extends Component {
  state = {
    input: '',
    output: ''
  };

  appendInput = e => {
    this.setState({
      input: this.state.input + e.currentTarget.textContent
    });
    console.log(this.state.input);
  };

  calculate = () => {
    this.setState({
      output: math.eval(this.state.input)
    });
    console.log(this.state.output);
  };

  displayCalculation = () => {
    return this.state.output;
  };

  render() {
    return (
      <div className="App">
        <Display chain={this.state.input} answer={this.state.output} />
        <Buttons appendInput={this.appendInput} handleEqual={this.calculate} />
      </div>
    );
  }
}

export default App;
