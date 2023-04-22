import React from "react";
import './index.css'

export default function List() {
  return (
    <div>
      <ul className="todo-main">
        <li>
          <label>
            <input type="checkbox" />
            <span>xxx</span>
          </label>
          <button className="btn btn-danger" style={{ display: "none" }}>
            删除
          </button>
        </li>
      </ul>
    </div>
  );
}
