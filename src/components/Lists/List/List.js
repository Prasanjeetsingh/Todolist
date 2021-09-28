import React from 'react';
import classes from './List.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
const list = (props) => (
  <div className={classes.ListControl}>
  <input className={classes.Input}
  type="text"
  onChange={props.changed}
  value={props.listItem} />
  <button className={classes.Delete} onClick={props.removed}> ❌ </button>
  </div>
);

export default list ;
