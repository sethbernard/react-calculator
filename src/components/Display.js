import React from 'react';

const Display = props => {
  return (
    <div className="display-container">
      <div className="display-chain">{props.chain}</div>
      <div className="display-answer">{props.answer}</div>
    </div>
  );
};

export default Display;
