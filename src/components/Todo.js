import React, { useContext, useState } from 'react'
import TodoContext from '../store/TodoContext'
import './Todo.css'

export default function Todo({todo}) {
    const [isCompleted, setIsCompleted] = useState(false)
    const todoCtx = useContext(TodoContext)

    function toggleCompleted() {
        setIsCompleted(prevIsCompleted => !prevIsCompleted)
    }

    function handleDeleteActiveTodo() {
        todoCtx.deleteTodo(todo)
      }

    return (
        <div className="Todo">
            <p onClick={toggleCompleted} className={isCompleted ? "completed" : ""}>{todo}</p>
            <i onClick={handleDeleteActiveTodo}className="fa-solid fa-trash-can"></i>
        </div>
    )
}
