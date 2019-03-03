import React from 'react';


const ListItem = (props) =>{
    const {todo,index, } = props;
    const message= "Task number"
  return(
    <li>
      <span>{index+1 } {message} {todo.title}</span>
    
    </li>
  )}

export default ListItem;
