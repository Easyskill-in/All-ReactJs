import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Store/TaskSlice'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
    const [MyTask, setMyTask] = useState("")
    const dispatch = useDispatch()
    const nav = useNavigate()

    return (
        <div>
            <h1>Add Task</h1>
            <hr />
            <form onSubmit={(e) => {
                e.preventDefault()

                dispatch(add({ id: Date.now(), task: MyTask }))

                setMyTask("")

                nav("/task")
            }}>
                <input type="text" placeholder='Enter New Task' value={MyTask} onChange={(e) => { setMyTask(e.target.value) }} />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
