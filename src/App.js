import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import * as math from 'mathjs';

class App extends Component {
  state = {
    input: '',
    output: '0',
    isOn: true
  };

  appendInput = e => {
    if (this.state.isOn) {
      this.setState({
        input: this.state.input + e.currentTarget.textContent
      });
    }
  };

  handleEqual = () => {
    this.setState({
      output: parseFloat(math.eval(this.state.input)).toFixed(6)
    });
  };

  clearInput = () => {
    this.setState({ input: '', output: '0', isOn: true });
  };

  turnOff = () => {
    this.setState({
      input: '',
      output: '',
      isOn: false
    });
  };

  render() {
    return (
      <div className="App">
        <Display
          chain={
            this.state.input === '' && this.state.isOn ? 'ON' : this.state.input
          }
          answer={this.state.output}
        />
        <Buttons
          appendInput={this.appendInput}
          handleEqual={this.handleEqual}
          clearInput={this.clearInput}
          turnOff={this.turnOff}
        />
      </div>
    );
  }
}

export default App;
