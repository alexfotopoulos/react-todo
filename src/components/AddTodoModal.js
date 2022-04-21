import React, { useContext, useRef } from 'react'
import './AddTodoModal.css'
import TodoContext from '../store/TodoContext'

export default function AddTodoModal(props) {
    const todoCtx = useContext(TodoContext)
    const todoRef = useRef();

    function handleClick() {
        const newTodo = todoRef.current.value
        todoCtx.addTodo(newTodo)
        props.clearModal()
    }
    return (
        <>
            <div className="AddTodoModal-backdrop" />
            <div className='AddTodoModal'>
                <div className='AddTodoModal-content'>
                    <div className="input-group mb-3">
                        <input ref={todoRef} type="text" className="form-control" placeholder="Add Todo" />
                        <button onClick={ handleClick } className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>
        </>
    )
}
