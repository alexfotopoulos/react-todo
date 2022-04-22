import { useState, useContext } from 'react'
import './App.css';
import Todo from './components/Todo';
import AddTodoModal from './components/AddTodoModal';
import TodoContext from './store/TodoContext';
import DeletedTodo from './components/DeletedTodo';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [viewMode, setViewMode] = useState('active')
  const todoCtx = useContext(TodoContext)

  let content
  if (viewMode === 'active') {
    content = todoCtx.todos.map(todo => (
      <Todo key={todo.id} id={todo.id} todo={todo.task} />
    ))
  } else if (viewMode === 'history') {
    content = todoCtx.history.map(todo => (
      <DeletedTodo key={todo.id} id={todo.id} todo={todo.task} />
    ))
  }

  function activateModal() {
    setShowModal(true)
  }

  function clearModal() {
    setShowModal(false)
  }

  function setViewToActive() {
    setViewMode('active')
  }

  function setViewToHistory() {
    setViewMode('history')
  }

  return (
    <>
      {showModal && <AddTodoModal clearModal={clearModal} />}
      <div className="App container">
        <header>Todo List</header>
        <div className='App-todoContainer'>
          <div>
            {content}
          </div>
          <div className='App-addTodoButton'>
            <i onClick={activateModal} className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
        <footer>
          <div className='App-footerContainer'>
            <div className='App-footerElement' onClick={setViewToActive}>
              <i className="fa-solid fa-unlock"></i>
              <span>Active</span>
            </div>
            <div className='App-footerElement' onClick={setViewToHistory}>
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
