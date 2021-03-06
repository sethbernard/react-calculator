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
    let { isOn, input } = this.state;
    if (isOn) {
      this.setState({
        input: input + e.currentTarget.textContent
      });
    }
  };

  handleEqual = () => {
    let { input } = this.state;
    let calculatedInput;

    if (!isNaN(input.slice(-1)) || input === '=') {
      calculatedInput = math.eval(input);
    }

    if (calculatedInput % 1 === 0) {
      this.setState({
        output: calculatedInput
      });
    }
    if (calculatedInput % 1 !== 0 && !isNaN(calculatedInput)) {
      this.setState({
        output: calculatedInput.toFixed(4)
      });
    } else {
      this.setState({ input });
    }
    setTimeout(this.newCalculation, 1);
  };

  newCalculation = () => {
    this.setState({
      input: this.state.output
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

  handleDelete = () => {
    let { input } = this.state;
    if (input.length > 1) {
      let fixedInput = input.substr(0, input.length - 1);
      this.setState({
        input: fixedInput
      });
    } else {
      this.setState({
        input: '',
        output: '0'
      });
    }
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
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
