import React from 'react';

export default class AddOptions extends React.Component {
  state = {
    error: ''
  }
  onSubmit = (e) => {
    e.preventDefault();

    const option = e.target.option.value;
    const error = this.props.onAdd(option);

    if (!error) {
      e.target.option.value = ''
    }

    this.setState(() => ({
      error        
    }));
  }
  render() {
    return (
      <div className="add-option">
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option__form" onSubmit={this.onSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}