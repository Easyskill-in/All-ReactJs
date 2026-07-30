import React, { useContext } from 'react'
import { myContext } from './Context/TodoContext'

const C = () => {
    const { Task, removeTask } = useContext(myContext)

    return (
        <div>
            <h1>C Component</h1>
            <hr />
            <ol>

                {Task.map((v, i) => (
                    <li key={v.id}>{v.task} <button onClick={() => { removeTask(v.id) }}>Delete</button></li>
                ))}
            </ol>
        </div>
    )
}

export default C
