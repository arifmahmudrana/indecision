import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button" onClick={props.onClick} disabled={props.disabled}>
      What should I do?
    </button>
  </div>
);

export default Action;