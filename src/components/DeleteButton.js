import React from 'react';

const DeleteButton = props => {
  return (
    <div className="Button sensitiveButton" onClick={props.handleDelete}>
      {props.text}
    </div>
  );
};

export default DeleteButton;
