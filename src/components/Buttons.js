import React, { Component } from 'react';
import Button from './Button';
import ZeroButton from './ZeroButton';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';
import OffButton from './OffButton';
import DeleteButton from './DeleteButton';

class Buttons extends Component {
  render() {
    const {
      appendInput,
      handleEqual,
      clearInput,
      turnOff,
      handleDelete
    } = this.props;
    return (
      <div className="button-container">
        <div className="row-of-buttons">
          <OffButton text="OFF" turnOff={turnOff} />
          <ClearButton text="AC" clearInput={clearInput} />
          <DeleteButton text="CE" handleDelete={handleDelete} />
          <Button text="/" handleClick={appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="7" handleClick={appendInput} />
          <Button text="8" handleClick={appendInput} />
          <Button text="9" handleClick={appendInput} />
          <Button text="*" handleClick={appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="4" handleClick={appendInput} />
          <Button text="5" handleClick={appendInput} />
          <Button text="6" handleClick={appendInput} />
          <Button text="-" handleClick={appendInput} />
        </div>
        <div className="row-of-buttons">
          <Button text="1" handleClick={appendInput} />
          <Button text="2" handleClick={appendInput} />
          <Button text="3" handleClick={appendInput} />
          <Button text="+" handleClick={appendInput} />
        </div>
        <div className="row-of-buttons">
          <ZeroButton text="0" handleClick={appendInput} />
          <Button text="." handleClick={appendInput} />
          <EqualButton text="=" handleEqual={handleEqual} />
        </div>
      </div>
    );
  }
}

export default Buttons;
