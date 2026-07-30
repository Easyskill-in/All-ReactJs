import React, { createContext, useState } from 'react'

export const myContext = createContext()

const TodoContext = ({ children }) => {
    const [Task, setTask] = useState([])
 


    function addTask(data) {
        const finalData = { id: Date.now(), task: data }
        setTask(prev => [...prev, finalData])
    }
    function removeTask(id) {
        setTask(prev => prev.filter(v => v.id !== id))
    }
    function updateTask(id, newData) {
        setTask(prev => prev.map(v => v.id === id ? newData : v))
    }

    return (
        <myContext.Provider value={{ Task, addTask, removeTask, updateTask }}>
            {children}
        </myContext.Provider>
    )
}

export default TodoContext
