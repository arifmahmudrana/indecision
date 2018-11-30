import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        onClick={props.onRemoveAll} 
        disabled={props.disabled}
        className="button button--link"
        >
        Remove All
      </button>
    </div>
    {
      props.options.length
      ? props.options.map(
        (i, k) => <Option key={k} title={i} onDelete={props.onDelete} index={k + 1} />
      )
      : <p className="widget__message">Please add an option to get started!</p>
    }
  </div>
);

export default Options;