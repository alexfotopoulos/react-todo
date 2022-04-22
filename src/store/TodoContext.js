import { createContext, useState } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    history: [],
    deleteTodoFromHistory: () => {}
})

export const TodoContextProvier = (props) => {
    const [todos, setTodos] = useState([])
    const [history, setHistory] = useState([])

    function handleAddTodo(todo) {
        setTodos(prevTodos => [...prevTodos, todo])
    }

    function handleDeleteTodo(todo, id) {
        setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id))
        setHistory(prevHistory => {
            return [...prevHistory, {task: todo, id: id}]
        })
    }

    function handleDeleteTodoFromHistory(id) {
        setHistory(prevHistory => {
            return prevHistory.filter(prev => prev.id !== id)
        })
    }

    const context = {
        todos,
        history,
        addTodo: handleAddTodo,
        deleteTodo: handleDeleteTodo,
        deleteTodoFromHistory: handleDeleteTodoFromHistory
    }


    return (
        <TodoContext.Provider value={context}>{props.children}</TodoContext.Provider>
    )
}

export default TodoContext;