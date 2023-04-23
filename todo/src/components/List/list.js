import React from "react";
import Item from "../Item/item";
import './index.css'

export default function List(props) {
  const {todos} = props 

  return (
    <ul className="todo-main">
      { todos.map((todo)=>{
          return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
      })}
    </ul>
  );
}
