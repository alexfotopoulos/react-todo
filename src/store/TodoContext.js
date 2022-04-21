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

    function handleDeleteTodo(todo) {
        setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo!== todo))
        setHistory(prevHistory => {
            return [...prevHistory, todo]
        })
    }

    function handleDeleteTodoFromHistory(todo) {
        setHistory(prevHistory => {
            return prevHistory.filter(prev => prev !== todo)
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