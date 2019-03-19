import React from 'react';

const DeleteButton = props => {
  return (
    <div className="Button" onClick={props.handleDelete}>
      {props.text}
    </div>
  );
};

export default DeleteButton;
