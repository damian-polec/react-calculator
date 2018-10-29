import React from 'react';

const button = (props) => {
  return <button className={`${props.buttonType} button`} id={props.buttonType}>{props.children}</button>
} 

export default button;