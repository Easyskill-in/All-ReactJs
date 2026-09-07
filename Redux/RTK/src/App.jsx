import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from './store/TodoSlice'

const App = () => {

  const [Task, setTask] = useState("")

  // const Data = useSelector(state => state)
  const Data = useSelector(state => state.todo)
  const dispatch = useDispatch();


  console.log(Data.task);

  // if (Data.task.length === 0) {
  //   return (
  //     <div>
  //       <input type="text" onChange={(e) => { setTask(e.target.value) }} value={Task} />
  //       <hr />
  //       <h1>Hello, World! {Task}</h1>
  //       <p>No Task Found</p>
  //     </div>
  //   )
  // }

  return (
    <div>

      <form action="" onSubmit={(e) => {
        e.preventDefault()
        console.log(Task);
        dispatch(addTask({ id: Date.now(), text: Task }))
        setTask("")

      }}>

        <input type="text" onChange={(e) => { setTask(e.target.value) }} value={Task} />
        <button type='submit'>submit</button>
      </form>

      <hr />
      <h1>Hello, World! {Task}</h1>
      <hr />
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Data.task.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.text}</td>
              <td><button onClick={() => dispatch(removeTask(task.id))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {Data.task.map(task => (
        <p key={task.id}>{task.text}</p>
      ))}
    </div>
  )
}

export default App
