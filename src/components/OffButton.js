import React from 'react';

const OffButton = props => {
  return (
    <div className="Button" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default OffButton;
