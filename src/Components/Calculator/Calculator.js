import React, { Component } from 'react';

import Button from '../Button/Button';
import Display from '../Display/Display';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: '0',
      equation: '',
      numbers: [
        {
          id: 'decimal',
          text: '.',
          dataType: '.'
        },
        {
          id: 'zero',
          text: '0',
          dataType: 0
        },
        {
          id: 'one',
          text: '1',
          dataType: 1
        },
        {
          id: 'two',
          text: '2',
          dataType: 2
        },
        {
          id: 'three',
          text: '3',
          dataType: 3
        },
        {
          id: 'four',
          text: '4',
          dataType: 4
        },
        {
          id: 'five',
          text: '5',
          dataType: 5
        },
        {
          id: 'six',
          text: '6',
          dataType: 6
        },
        {
          id: 'seven',
          text: '7',
          dataType: 7
        },
        {
          id: 'eight',
          text: '8',
          dataType: 8
        },
        {
          id: 'nine',
          text: '9',
          dataType: 9
        }
      ],
      symbols: [
        {
          id: 'divide',
          text: '/',
          dataType: '/'
        },
        {
          id: 'multiply',
          text: 'X',
          dataType: '*'
        },
        {
          id: 'subtract',
          text: '-',
          dataType: '-'
        },
        {
          id: 'add',
          text: '+',
          dataType: '+'
        }
      ]
    }

    this.onClearHandler = this.onClearHandler.bind(this);
    this.onNumberHandler = this.onNumberHandler.bind(this);
    this.onSymbolHandler = this.onSymbolHandler.bind(this);
    this.onEqualsHandler = this.onEqualsHandler.bind(this);
  }

  onClearHandler () {
    this.setState({result: '0', equation: ''});
  }

  onEqualsHandler () {
    const equation = this.state.equation;
    const result = this.state.result;
    const finalResult = eval(equation + result)
    this.setState({result: finalResult, equation: ''});
  }
  
  onNumberHandler (e) {
    let value = this.state.result;
    const clickedButton = e.target.getAttribute('data-type');

    const count = value.split('').filter(sign => sign === '.').length;
    if(value === '0') {
      if(clickedButton === '.') {
        value = value + clickedButton;
        this.setState({result: value});
      } else {
        this.setState({result: clickedButton});
      }
    } else if (value !== '0') {
      if(clickedButton === '.' && count > 0) {
        return;
      } else {
        value += clickedButton;
        this.setState({result: value});
      }
    }  
  }
  onSymbolHandler (e) {
    let value = this.state.result;
    let equation = this.state.equation;
    const clickedSymbol = e.target.getAttribute('data-type');
    

    if(value === '0') {
      if((/\.$/g.test(value))){
        return;
      } else {
        const lastChar = equation.slice(-1);
        const newEquation = equation.replace(lastChar, clickedSymbol);
        this.setState({equation: newEquation});
      }
    } else {
      if(equation === '0') {
        equation = value + clickedSymbol;
        this.setState({result: '0', equation: equation})
      }
      value += clickedSymbol;
      equation += value;
      this.setState({result: '0', equation: equation});
    }
  }

  render () {
    const symbols = this.state.symbols.map(button => {
      return (
        <Button 
          buttonType={button.id}
          dataType={button.dataType} 
          key={button.id}
          click={e => this.onSymbolHandler(e)}>{button.text}</Button>)
    })
    const numbers = this.state.numbers.map(button => {
      return (
        <Button 
          buttonType={button.id}
          dataType={button.dataType} 
          key={button.id}
          click={e => this.onNumberHandler(e)}>{button.text}</Button>)
    })
    return (
      <div className = 'calculator'>
        <Display result={this.state.result} equation={this.state.equation}/>
        <Button buttonType='clear' click={this.onClearHandler}>AC</Button>
        <Button buttonType='equals' click={this.onEqualsHandler}>=</Button>
        {numbers}
        {symbols}
      </div>
    )
  }
}

export default Calculator