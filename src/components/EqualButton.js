import React from 'react';

const EqualButton = props => {
  return (
    <div className="Button" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default EqualButton;
