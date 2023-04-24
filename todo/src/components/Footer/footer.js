import React from "react";
import './index.css'

export default function Footer(props) {
  const {todos} = props;
  
  //已完成个数
  const donecount = todos.reduce((pre,todo)=>{
    return pre+(todo.done?1:0)
  },0);

  //总数
  const total = todos.length;
  
  //全选checkbox的回调
  const handleCheckedAll = ()=>{
    props.checkAllTodo();
  }

  //清除已完成任务的回调
  const handleClear = ()=>{
    props.clearDone();
  }

  return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={handleCheckedAll} checked={donecount=== total?true:false}/>
        </label>
        <span>
          <span>已完成{donecount}</span>/全部{total}
        </span>
        <button onClick={handleClear} className="btn btn-danger">清除已完成的任务 </button>
      </div>
  );
}
