import React from 'react';

const EqualButton = props => {
  return (
    <div className="Button" onClick={props.handleEqual}>
      {props.text}
    </div>
  );
};

export default EqualButton;
