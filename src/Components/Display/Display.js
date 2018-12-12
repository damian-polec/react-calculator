import React from 'react';

const display = (props) => {
  return (
    <div className='calculator-display'>
      <div className='equation'>{props.equation}</div>
      <div className='result' id='display'>{props.result}</div>
    </div>
    )
}

export default display;