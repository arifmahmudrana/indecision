import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.index}. {props.title}
    </p>  
    <button
      onClick={e => props.onDelete(props.title)}
      className="button button--link"
    >
      Remove
    </button>  
  </div>
);

export default Option;