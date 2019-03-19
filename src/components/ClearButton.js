import React from 'react';

const ClearButton = props => {
  return (
    <div className="Button" onClick={props.clearInput}>
      {props.text}
    </div>
  );
};

export default ClearButton;
