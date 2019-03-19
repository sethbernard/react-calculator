import React from 'react';

const ClearButton = props => {
  return (
    <div className="Button" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default ClearButton;
