import React from 'react';

const Button = props => {
  return (
    <div className="Button" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default Button;
