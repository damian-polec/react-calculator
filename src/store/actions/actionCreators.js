import * as actionTypes from './actionTypes';


export const numActionCreator = (event) => {
    return {
        type: actionTypes.NUMBER_ACTION,
        payload: {
            buttonType: event.target.getAttribute('data-type'),
            isInteger: Number.isInteger(parseInt(event.target.getAttribute('data-type')))
        }
    }
}

export const operatorActionCreator = (event) => {
    return {
        type: actionTypes.OPERATOR_ACTION,
        buttonType: event.target.getAttribute('data-type') 
    }
}

export const calculateActionCreator = () => {
    return {
        type: actionTypes.CALCULATE_ACTION
    }
}

export const clearActionCreator = () => {
    return {
        type: actionTypes.CLEAR_ACTION
    }
}