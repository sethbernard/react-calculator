import React from 'react';

const DeleteButton = props => {
  return (
    <div className="Button" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default DeleteButton;
