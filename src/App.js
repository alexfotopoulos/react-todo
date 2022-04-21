import { useState, useContext } from 'react'
import './App.css';
import Todo from './components/Todo';
import AddTodoModal from './components/AddTodoModal';
import TodoContext from './store/TodoContext';

function App() {
  const [showModal, setShowModal] = useState(false)
  const todoCtx = useContext(TodoContext)

  function activateModal() {
    setShowModal(true)
  }

  function clearModal() {
    setShowModal(false)
  }

  return (
    <>
      {showModal && <AddTodoModal clearModal={clearModal}/>}
      <div className="App container">
        <header>Todo Lost</header>
        <div className='App-todoContainer'>
          <div>
            {todoCtx.todos.map(todo => (
              <Todo todo={todo}/>
            ))}
          </div>
          <div className='App-addTodoButton'>
            <i onClick={activateModal} className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
        <footer>
          <div className='App-footerContainer'>
            <div className='App-footerElement'>
              <i className="fa-solid fa-list"></i>
              <span>All</span>
            </div>
            <div className='App-footerElement'>
              <i className="fa-solid fa-unlock"></i>
              <span>Active</span>
            </div>
            <div className='App-footerElement'>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>History</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
