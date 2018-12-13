import React from 'react';

const display = (props) => {
  return (
    <div className='calculator-display'>
      <div className='equation' id='display'>{props.equation}</div>
      <div className='result' >{props.result}</div>
    </div>
    )
}

export default display;