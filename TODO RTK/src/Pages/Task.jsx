import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../Store/TaskSlice';
import { useNavigate } from 'react-router-dom';

const Task = () => {
    const { task } = useSelector(state => state.Task)
    console.log(task);

    const dispatch = useDispatch()
    const nav = useNavigate()

    if (task.length <= 0) {
        return <h1>No Task Yet</h1>
    }

    function handleDelete(id) {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <table border={2} cellPadding={7} cellSpacing={4}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        task.map((value, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value.id}</td>
                                <td>{value.task}</td>
                                <td><button onClick={() => { handleDelete(value.id) }}>Delete</button></td>
                                <td><button onClick={() => { nav(`/update/${value.id}`) }}>Update</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div >
    )
}

export default Task
