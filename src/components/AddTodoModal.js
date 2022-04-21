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
        let newTodo = todoRef.current.value
        todoCtx.addTodo(newTodo)
        props.clearModal()
    }
    return (
        <>
            <div onClick={clearModal}className="AddTodoModal-backdrop" />
            <div className='AddTodoModal'>
                <form onSubmit={handleSubmit} className="input-group mb-3">
                    <input autoFocus ref={todoRef} type="text" className="form-control" placeholder="Add Todo" />
                    <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </form>
            </div>
        </>
    )
}
