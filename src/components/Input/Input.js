import React from 'react';
import Button from '../UI/Button/Button';
import classes from './Input.css';
const input = (props) => {
  return (
  <div>
  <input className={classes.Input} type='text' placeholder="Add a Item" value={props.in} onChange= {(event) => props.inputChangeHandler(event)}/>
  <Button btnType='Success' clicked={props.submitedHandler}>✢</Button>
  </div>
);
}

export default input;
