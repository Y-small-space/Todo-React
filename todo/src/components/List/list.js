import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/item";
import './index.css'

export default function List(props) {
  const {todos,updateTodo,deleteTodo} = props 

  return (
    <ul className="todo-main">
      { todos.map((todo)=>{
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      })}
    </ul>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};