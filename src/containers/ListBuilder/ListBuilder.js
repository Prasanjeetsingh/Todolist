import React , {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import axios from 'axios';

import classes from './ListBuilder.css';
import Input from '../../components/Input/Input';
class ListBuilder extends Component {

  state = {
    list: [],
    input: '',
    empty: true,
  }


  addTodo(val){
      const todo = {text: val, id: window.id++}
      this.state.data.push(todo);
      this.setState({data: this.state.data});
    }

    inputChangedHandler = (event) => {
      this.setState({input: event.target.value});
      if(event.target.value){
        this.setState({empty:false});
      }

    }

    editHandler = (event,key) => {
      let newlist = this.state.list;
      newlist[key] = event.target.value;
      this.setState({list: newlist});

    }

  submitHandler = () => {
    const curlist = this.state.list;
    curlist.push(this.state.input);
    this.setState({list: curlist , input:"" , empty:true});
  }

  handleRemove =(val) => {
      const remainder = this.state.list.filter((todo) => {
        if(todo!== val) return todo;
      });
      this.setState({list: remainder});
    }

  render(){
    return (
      <div className={classes.ListBuilder}>
         <Input
          in={this.state.input} inputChangeHandler={this.inputChangedHandler}
         submitedHandler={this.submitHandler}
         isempty={this.state.empty}
          />
      <Lists list={this.state.list}
      change={this.editHandler}
       Removed={this.handleRemove}/>
      </div>
    );
  };
}

 export default ListBuilder;
