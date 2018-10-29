import React, { Component } from 'react';

import Button from '../Button/Button';
import Display from '../Display/Display';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '0',
      buttons: [
        {
          id: 'clear',
          text: 'AC'
        },
        {
          id: 'divide',
          text: '/'
        },
        {
          id: 'multiply',
          text: 'X'
        },
        {
          id: 'subtract',
          text: '-'
        },
        {
          id: 'add',
          text: '+'
        },
        {
          id: 'equals',
          text: '='
        },
        {
          id: 'decimal',
          text: '.'
        },
        {
          id: 'zero',
          text: '0'
        },
        {
          id: 'one',
          text: '1'
        },
        {
          id: 'two',
          text: '2'
        },
        {
          id: 'three',
          text: '3'
        },
        {
          id: 'four',
          text: '4'
        },
        {
          id: 'five',
          text: '5'
        },
        {
          id: 'six',
          text: '6'
        },
        {
          id: 'seven',
          text: '7'
        },
        {
          id: 'eight',
          text: '8'
        },
        {
          id: 'nine',
          text: '9'
        }
      ]
    }

    this.onClearHandler = this.onClearHandler.bind(this);
  }

  onClearHandler () {
    this.setState({value: '0'});
  }

  render () {
    const buttons = this.state.buttons.map(button => {
      return <Button buttonType={button.id} key={button.id}>{button.text}</Button>
    })
    return (
      <div className = 'calculator'>
        <Display value={this.state.value}/>
        {buttons}
      </div>
    )
  }
}

export default Calculator