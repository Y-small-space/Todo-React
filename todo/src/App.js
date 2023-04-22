import './App.css'
import Header from'./components/Header/header'
import Footer from './components/Footer/footer';
import Item from './components/Item/item';

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header/>
        <Item/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;