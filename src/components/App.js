import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';

export default class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }
  removeAll = () => this.setState(() => ({options: []}))
  pickOption = () => {
    const options = this.state.options;
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    this.setState(() => ({selectedOption}));
  }
  addOption = (option) => {
    option = option.trim();
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.includes(option)) {
      return 'Option all ready exists';
    }

    this.setState(({options}) => ({options: options.concat(option)}));
  }
  deleteOption = (option) => this.setState(({options}) => ({options: options.filter(i => i !== option)}))
  handleModalClose = () => this.setState(() => ({selectedOption: undefined}))
  render() {
    const title = 'Indecision App', 
        subTitle = 'Put your life in the hands of your computer!';

    return (
      <div>
        <Header {...{title, subTitle}} />
        <div className="container">
          <Action disabled={this.state.options.length < 1} onClick={this.pickOption} />
          <div className="widget">
            <Options options={this.state.options}
              disabled={this.state.options.length < 1} 
              onRemoveAll={this.removeAll} 
              onDelete={this.deleteOption} />
            <AddOptions onAdd={this.addOption} />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} onModalClose={this.handleModalClose} />
      </div>
    );
  }
}