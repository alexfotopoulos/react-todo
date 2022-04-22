import React, { useContext, useRef } from 'react'
import './AddTodoModal.css'
import TodoContext from '../store/TodoContext'

export default function AddTodoModal(props) {
    const todoCtx = useContext(TodoContext)
    const todoRef = useRef();

    function clearModal() {
        props.clearModal()
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todoRef.current.value.length > 0) {
        let newTodo = {task: '', id: ''}
        newTodo.task = todoRef.current.value
        newTodo.id = Math.random().toFixed(6)
        todoCtx.addTodo(newTodo)
        props.clearModal()
        }
        else {
            alert("Add a todo")
        }
    }
    return (
        <>
            <div onClick={clearModal}className="AddTodoModal-backdrop" />
            <div className='AddTodoModal'>
                <header className='AddTodoModal-header'>Add Todo</header>
                <form onSubmit={handleSubmit} className="input-group my-3 px-3">
                    <input autoFocus ref={todoRef} type="text" className="form-control" />
                    <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </form>
            </div>
        </>
    )
}
