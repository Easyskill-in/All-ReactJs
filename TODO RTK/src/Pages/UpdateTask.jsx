import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../Store/TaskSlice'

const UpdateTask = () => {
    const { id } = useParams()

    const Task = useSelector(state => state.Task.task).find(v => v.id == id)
    console.log("Update ", Task);

    const [MyTask, setMyTask] = useState(Task?.task || "")

    const dispatch = useDispatch()
    const nav = useNavigate()




    return (
        <div>
            <h1>Update Task {id}</h1>
            <hr />
            <form onSubmit={(e) => {
                e.preventDefault()

                dispatch(update({ id: id, newData: MyTask }))

                setMyTask("")

                nav("/task")
            }}>
                <input type="text" placeholder='Enter New Task' value={MyTask} onChange={(e) => { setMyTask(e.target.value) }} />
                <button type='submit'>Update Task</button>
            </form>
        </div>
    )
}

export default UpdateTask
