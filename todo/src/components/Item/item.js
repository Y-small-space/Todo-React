import React, { useState } from "react";
import './index.css'

export default function Item(props) {
  const {id,name,done} = props
  const [state,setState] = useState({mouse:false})

  //鼠标移入、移出的回调
  const hanleMouse = (flag)=>{
    setState({mouse:flag})
  }

  //勾选、取消勾选某一个todo的回调
  const handleCheck = (id,event)=>{
    props.updateTodo(id,event.target.checked)
  }

  //删除一个todo的回调
  const handleDelete = (id)=>{
    if(window.confirm('你确定删除吗？')){
      props.deleteTodo(id);
    }
  }
  
  return (
    <li style={{backgroundColor:state.mouse ? 'grey' : ''}} onMouseEnter={()=>hanleMouse(true)} onMouseLeave={()=>hanleMouse(false)}>
      <label>
        <input type="checkbox" checked={done} onChange={(event)=>handleCheck(id,event)}/>
        <span>{name}</span>
      </label>
      <button onClick={()=>{handleDelete(id)}} className="btn btn-danger" style={{ display:state.mouse?"block":"none" }}>
        删除
      </button>
    </li>
  );
}
