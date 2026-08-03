import React, { useContext, useState } from 'react'
import { TodoContext } from './Context/Todo'

const App = () => {
  const [Data, setData] = useState("")
  const { addTask, Task, deleteTask } = useContext(TodoContext)
  return (
    <div className='App'>
      <form onSubmit={(e) => {
        e.preventDefault()
        addTask(Data)
        setData("")
      }}>
        <input type="text" placeholder='Enter Task' onChange={(e) => {
          setData(e.target.value)
        }} value={Data} />
        <button type='submit'>Add Task</button>
      </form>
      <h1>{Data}</h1>

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
          {Task.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.task}</td>
                <td><button className='del' onClick={() => {
                  deleteTask(v.id)
                }}>delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
