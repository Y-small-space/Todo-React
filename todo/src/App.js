import './App.css'
import { useState} from 'react';

import Header from'./components/Header/header'
import Footer from './components/Footer/footer';
import List from './components/List/list';

function App() {
  //初始化状态
  const [state, setTodos] = useState({
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "学习", done: true },
      { id: "003", name: "睡觉", done: false },
      { id: "004", name: "看手机", done: false },
    ],
  });

  //addTodo用于添加一个todo，接收的参数是todo对象
  const addTodo = (todoObject) => {
    //追加一个todo
    const newTodos = [todoObject, ...state.todos];
    //更新状态
    setTodos({ todos: newTodos });
  };
  //updateTodo用于更新一个todo对象
  const updateTodo = (id, done) => {
    //获取状态中的todos
    const { todos } = state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done: done };
      } else {
        return todoObj;
      }
    });
    setTodos({ todos: newTodos });
  };
  //deleteTodo用于删除一个todo对象
  const deleteTodo = (id) => {
    const { todos } = state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    setTodos({ todos: newTodos });
  };
  //checkAllTodo用于全选
  const checkAllTodo = () =>{
    const {todos} = state;
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:!todoObj.done};
    })
    setTodos({todos:newTodos});
  }
  //clearDone清除所有已经完成的
  const clearDone = ()=>{
      const {todos} = state;
      const newTodos = todos.filter((todoObj)=>{
        return todoObj.done === false;
      })
      setTodos({todos:newTodos});
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={state.todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer todos={state.todos} checkAllTodo={checkAllTodo} clearDone={clearDone} />
      </div>
    </div>
  );
}

export default App;