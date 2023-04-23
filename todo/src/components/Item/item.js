import React from "react";
import './index.css'

export default function Item(props) {
  const {name} = props
 
  return (
    <div>
      <ul className="todo-main">
        <li>
          <label>
            <input type="checkbox" />
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display: "none" }}>
            删除
          </button>
        </li>
      </ul>
    </div> 
  );
}
