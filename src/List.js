import React from 'react';
import ListItem from './ListItem';


const List = (props) =>{
  return(
            <ul>
                {
                     props.todos.map((todo, index,) =>{
                        return ( <ListItem

                                    key={index}
                                    index={index}
                                    todo={todo}
                                
                                    />
                        )
                        })}
            </ul>

)}

  
export default List;
