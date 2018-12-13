import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Display from '../Display/Display';
import * as actionCreators from '../../store/actions/actionCreators';
import * as helpers from '../../helpers/helpers'; 

class Calculator extends Component {
 
/* react constructor with state and handlers binding before adding redux 
  constructor(props){
    super(props)
    this.state = {
      value: '0',
      formula: '0'
    }

    this.onClearHandler = this.onClearHandler.bind(this);
    this.onNumberHandler = this.onNumberHandler.bind(this);
    this.onOperatorHandler = this.onOperatorHandler.bind(this);
    this.onCalculateHandler = this.onCalculateHandler.bind(this);
  }
*/

/* react onNumberHandler before redux added

  onNumberHandler (event) {
    const value = this.state.value;
    const formula = this.state.formula;
    const buttonType = event.target.getAttribute('data-type');
    const isInteger = Number.isInteger(parseInt(buttonType));

    isInteger ? this.setState({
      value: value === '0' ? value.replace('0', buttonType) : value + buttonType,
      formula: formula === '0' ? formula.replace('0', buttonType) : formula + buttonType
    }): !value.includes('.') ? this.setState({value: value === '0' ? '0.' : value + '.', formula: formula === '0' ? '0.' : formula + '.'})
              : this.setState({value: value});
  }
*/

/* react operator handler before redux added

  onOperatorHandler (event) {
    const value = this.state.value;
    const formula = this.state.formula;
    const buttonType = event.target.getAttribute('data-type');
    
    value !=='0' ? this.setState({value: '0', formula: formula + buttonType})
                 : this.setState({
                   formula: helpers.endsWithOperator.test(formula) ? formula.replace(helpers.endsWithOperator, buttonType)
                                                                   : formula + buttonType
                                                                  })
          
  }
*/

/* react calculate handler before redux
  onCalculateHandler () {
    const value = this.state.value;
    const formula = this.state.formula;
    console.log(math.eval('1+2'));

    value !== '0' ? this.setState({
      value: '0', formula: helpers.endsWithOperator.test(formula) ? math.eval(formula + value) : math.eval(formula)
      })
      : this.setState({formula: helpers.endsWithOperator.test(formula) ?  math.eval(formula.replace(helpers.endsWithOperator, '')) : math.eval(formula)})
  } 
*/

/* react clear handler before redux
  onClearHandler () {
    this.setState({value: '0', formula: '0'});
  }
*/
  
  render () {
    const symbols = helpers.oprerators.map(button => {
      return (
        <Button 
          buttonType={button.id}
          dataType={button.dataType} 
          key={button.id}
          click={this.props.onOperatorHandler}>{button.text}</Button>)
    })
    const numbers = helpers.numbers.map(button => {
      return (
        <Button 
          buttonType={button.id}
          dataType={button.dataType} 
          key={button.id}
          click={this.props.onNumberHandler}>{button.text}</Button>)
    })
    return (
      <div className = 'calculator'>
        <Display result={this.props.value} equation={this.props.formula}/>
        <Button buttonType='clear' click={this.props.onClearHandler}>AC</Button>
        <Button buttonType='equals' click={this.props.onCalculateHandler}>=</Button>
        {numbers}
        {symbols}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    formula: state.formula
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNumberHandler: (event) => dispatch(actionCreators.numActionCreator(event)),
    onOperatorHandler: (event) => dispatch(actionCreators.operatorActionCreator(event)),
    onCalculateHandler: () => dispatch(actionCreators.calculateActionCreator()),
    onClearHandler: () => dispatch(actionCreators.clearActionCreator())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator)