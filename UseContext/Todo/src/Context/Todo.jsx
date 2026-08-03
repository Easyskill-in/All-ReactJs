import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

const Todo = ({ children }) => {
    const [Task, setTask] = useState([])

    function addTask(data) {
        setTask(prev => [...prev, { id: Date.now(), task: data }])
    }
    function deleteTask(id) {
        setTask(prev => prev.filter(v => v.id !== id))
    }
    function updateTask(id, newTask) {
        setTask(prev => prev.map(v => v.id === id ? { id: Date.now(), task: newTask } : v))
    }

    console.log(Task);

    return (
        <TodoContext.Provider value={{ Task, addTask, deleteTask, updateTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export default Todo
