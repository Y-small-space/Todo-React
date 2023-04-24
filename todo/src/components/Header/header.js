import React from "react";
import {v4 as uuidv4} from "uuid";
import './index.css'

export default function Header(props){
  const myid = uuidv4(); 
  const handleKeyup =(event)=>{
    //解构赋值获取Keycode,target
    /*event.keycode  event.target.value*/
    const { keyCode, target } = event;
    //判断是否为回车键
    if (keyCode !== 13) return ;
    //添加的名字不能为空
    //.trim()去空格
    if (target.value.trim()===''){
      alert('输入不能为空');
      return
    }
    //准备好一个todo对象
    const todoObject = {id:myid,name:target.value,done:false}
    //将todoObject传递给App
    props.addTodo(todoObject);
    target.value = '';
  }

  return (
      <div className="todo-header">
        <input onKeyUp={handleKeyup} type="text" placeholder="请输入你的任务，并按回车键确认" />
      </div>
  );
}