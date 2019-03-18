import React, { Component } from 'react';
import Button from './Button';
import ZeroButton from './ZeroButton';
import * as math from 'mathjs';
import Display from './Display';
import EqualButton from './EqualButton';

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="row-of-buttons">
          <Button text="OFF" />
          <Button text="AC" />
          <Button text="CE" />
          <Button text="/" handleClick={this.props.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="7" handleClick={this.props.appendInput} />
          <Button text="8" handleClick={this.props.appendInput} />
          <Button text="9" handleClick={this.props.appendInput} />
          <Button text="*" handleClick={this.props.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="4" handleClick={this.props.appendInput} />
          <Button text="5" handleClick={this.props.appendInput} />
          <Button text="6" handleClick={this.props.appendInput} />
          <Button text="-" handleClick={this.props.appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="1" handleClick={this.props.appendInput} />
          <Button text="2" handleClick={this.props.appendInput} />
          <Button text="3" handleClick={this.props.appendInput} />
          <Button text="+" handleClick={this.props.appendInput} />
        </div>
        <div className="row-of-buttons">
          <ZeroButton text="0" handleClick={this.props.appendInput} />
          <Button text="." handleClick={this.props.appendInput} />
          <EqualButton text="=" handleClick={this.props.handleEqual} />
        </div>
      </div>
    );
  }
}

export default Buttons;
