import * as actionTypes from '../actions/actionTypes';
import * as math from 'mathjs';
import { endsWithOperator } from '../../helpers/helpers';

const initialState = {
    value: '0',
    formula: '0'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.NUMBER_ACTION:
            return  action.payload.isInteger ? {
                ...state, 
                value: state.value === '0' ? state.value.replace('0', action.payload.buttonType) : state.value + action.payload.buttonType,
                formula: state.formula === '0' ? state.formula.replace('0', action.payload.buttonType) : state.formula + action.payload.buttonType 
            } : !state.value.includes('.') ? {
                ...state,
                value: state.value === '0' ? '0.' : state.value + '.', 
                formula: state.formula === '0' ? '0.' : state.formula + '.'                
            } : {
                ...state,
                value: state.value
            }
        case actionTypes.OPERATOR_ACTION:
            return state.value !=='0' ? {
                ...state,
                value: '0', 
                formula: state.formula + action.buttonType
            } : {
                ...state,
                formula: endsWithOperator.test(state.formula) ? state.formula.replace(endsWithOperator, action.buttonType) : state.formula + action.buttonType  
            }
        case actionTypes.CALCULATE_ACTION:
            return state.value !== '0' ? {
                ...state,
                value: '0',
                formula: endsWithOperator.test(state.formula) ? math.eval(state.formula + state.value) : math.eval(state.formula)
            } : {
                ...state,
                formula: endsWithOperator.test(state.formula) ?  math.eval(state.formula.replace(endsWithOperator, '')) : math.eval(state.formula)
            }
        case actionTypes.CLEAR_ACTION:
            return {
                ...state,
                value: '0',
                formula: '0'
            }
        default:
            return state;
    }
}

export default reducer;