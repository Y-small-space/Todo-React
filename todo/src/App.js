import './App.css'
import { useState} from 'react';
import Header from'./components/Header/header'
import Footer from './components/Footer/footer';
import List from './components/List/list';

function App() {

  const [todo] = useState([
    { id: "001", name: "吃饭", done: true },
    { id: "002", name: "学习", done: true },
    { id: "003", name: "睡觉", done: true },
  ]);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List todos={todo}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;