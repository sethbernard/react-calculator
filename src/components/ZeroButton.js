import React from 'react';

const ZeroButton = props => {
  return (
    <div className="ZeroButton" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default ZeroButton;
