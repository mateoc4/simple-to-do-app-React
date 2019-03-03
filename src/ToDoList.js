import React, { Component } from 'react';
import './ToDoList.css';
import NewTodoForm from './NewTodoForm';
import List from './List'


class ToDoList extends Component {
constructor(){
  super();
  this.state={
    message:'Task number',
    newTodo:'',
    todos:[],
    };
  }

newTodoChange(e){
this.setState({
  newTodo:e.target.value
  });
};

formSubmitted(e){
  e.preventDefault();
  this.setState({
    newTodo:"",
    todos:[...this.state.todos, {
      title: this.state.newTodo,
      done: false
    }]});
};
toggleTodoDone(e, index){
  const todos = [...this.state.todos]; // kopia tablicty
   todos[index] ={...todos[index]}; // kopia todo
   todos[index].done=e.target.checked; // aktualizacja wartosci done na skopiowanym todo
  this.setState({
    todos
    });
}

removeTodo(){
  const todos = [...this.state.todos];
  todos.pop() 

  this.setState({
    todos
    });
}

allDone(){
  const todos = this.state.todos.splice()
  this.setState({
    todos
  })
}

  render() {
    return (
      <div className="ToDoList">

        <NewTodoForm 
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChange={this.newTodoChange.bind(this)}
          newTodo={this.state.newTodo}
        />

        <button onClick={()=>this.allDone()}>Clear</button>
        <button onClick={()=>this.removeTodo()}>Remove</button>

       <List
         todos={this.state.todos}
       />
      </div>
    );
  }
}

export default ToDoList;

/*
allDone(){
  const todos = this.state.todos.map(todo =>{
    return {
      title: todo.title,
      done:true
    }
  })
  this.setState({
    todos
  })
}



removeTodo(index){
  const todos = [...this.state.todos];
  todos.splice(index, 1);

  this.setState({
    todos
    });
}
*/