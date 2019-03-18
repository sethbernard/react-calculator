import React from 'react';

const Button = props => {
  return (
    <div
      className="Button"
      onClick={props.text !== '=' ? props.handleClick : props.handleEqual}
    >
      {props.text}
    </div>
  );
};

export default Button;
