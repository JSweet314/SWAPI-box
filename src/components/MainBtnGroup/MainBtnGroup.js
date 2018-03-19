import React, { Component } from 'react';
import './MainBtnGroup.css';
import Button from '../Button/Button';

export default class MainBtnGroup extends Component {
  constructor() {
    super();
    this.buttonTexts = ['people', 'planets', 'vehicles'];
    this.state = {
      selectedButton: ''
    };
  }

  handleOnClick = (event) => {
    const selectedButton = event.target.name;
    this.setState({selectedButton});
  }

  buttonGenerator = () => {
    return this.buttonTexts.map((text, index) => {
      const isSelected = text === this.state.selectedButton ? 'selected': '';
      return (
        <Button 
          isSelected={isSelected}
          btnText={text} 
          key={index} 
          handleOnClick={this.handleOnClick}
        />
      );
    });
  };
  
  
  render() {
    return (
      <div className="mainBtnGroup">
        {this.buttonGenerator()}
      </div>
    );
  }
}
