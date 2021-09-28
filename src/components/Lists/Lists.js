import React from 'react';
import List from './List/List';
import classes from './Lists.css';
const Lists = (props) => {

  let transformedList = null;
  if(props.list){
   transformedList = props.list
  .map((liskey , i) => {
    return  (
      <List key={i}
      listItem ={liskey}
      changed={(event) => props.change(event , i)}
      removed={() => props.Removed(liskey)}
       />
    )
  });
}

    return (
      <div className={classes.ListsControls}>
        {transformedList}
      </div>
    );
};
 export default Lists;

 // <button
 // className={classes.SaveButton}>
 // SAVE NOW</button>
