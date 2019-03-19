import React from 'react';

const OperationButton = props => {
  return (
    <div className="Button operationButton" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default OperationButton;
