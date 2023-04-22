import React from "react";
import './index.css'

export default function Header(){
    return (
        <div className="todo-header">
          <input type="text" placeholder="请输入你的任务，并按回车键确认" />
        </div>
    );
}