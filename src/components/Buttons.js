import React, { Component } from 'react';
import Button from './Button';
import ZeroButton from './ZeroButton';
import * as math from 'mathjs';

class Buttons extends Component {
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

  render() {
    return (
      <div className="button-container">
        <div className="row-of-buttons">
          <Button text="OFF" />
          <Button text="AC" />
          <Button text="CE" />
          <Button text="/" handleClick={this.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="7" handleClick={this.appendInput} />
          <Button text="8" handleClick={this.appendInput} />
          <Button text="9" handleClick={this.appendInput} />
          <Button text="x" handleClick={this.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="4" handleClick={this.appendInput} />
          <Button text="5" handleClick={this.appendInput} />
          <Button text="6" handleClick={this.appendInput} />
          <Button text="-" handleClick={this.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="1" handleClick={this.appendInput} />
          <Button text="2" handleClick={this.appendInput} />
          <Button text="3" handleClick={this.appendInput} />
          <Button text="+" handleClick={this.appendInput} />
        </div>
        <div className="row-of-buttons">
          <ZeroButton text="0" handleClick={this.appendInput} />
          <Button text="." handleClick={this.appendInput} />
          <Button text="=" handleClick={this.calculate} />
        </div>
      </div>
    );
  }
}

export default Buttons;
