import React from 'react';

const button = (props) => {
  return (
    <button 
      className={`${props.buttonType} button`} 
      id={props.buttonType}
      data-type={props.dataType}
      onClick={props.click}>
        {props.children}
    </button>
    )
} 

export default button;