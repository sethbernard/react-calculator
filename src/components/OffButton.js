import React from 'react';

const OffButton = props => {
  return (
    <div className="Button" onClick={props.turnOff}>
      {props.text}
    </div>
  );
};

export default OffButton;
