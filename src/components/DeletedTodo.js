import React, {useContext} from 'react'
import './DeletedTodo.css'
import TodoContext from '../store/TodoContext'

export default function DeletedTodo({todo, id}) {
    const todoCtx = useContext(TodoContext)

    function handleDeleteHistoryTodo() {
        todoCtx.deleteTodoFromHistory(id)
    }
    return (
        <div className="DeletedTodo">
            <p >{todo}</p>
            <i onClick={handleDeleteHistoryTodo}className="fa-solid fa-trash-can"></i>
        </div>
    )
}
