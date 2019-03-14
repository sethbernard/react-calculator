import React from 'react';
import Button from './Button';
import ZeroButton from './ZeroButton';

const Buttons = () => {
  return (
    <div>
      <div className="row-of-buttons">
        <Button text="OFF" />
        <Button text="AC" />
        <Button text="CE" />
        <Button text="/" />
      </div>
      <div className="row-of-buttons">
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" />
      </div>
      <div className="row-of-buttons">
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </div>
      <div className="row-of-buttons">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />
      </div>
      <div className="row-of-buttons">
        <ZeroButton text="0" />
        <Button text="." />
        <Button text="=" />
      </div>
    </div>
  );
};

export default Buttons;
