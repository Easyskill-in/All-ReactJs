import React, { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fn() {
      try {
        const Res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(Res.data)
        setData(Res.data)
      } catch (error) {
        console.log("Error", error)
      }
    }

    fn()
  }, [])

  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={3}>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={value.id} className={(value.completed ? "yes" : "no") + ` p${value.userId}`}>
              <td>{value.id}</td>
              <td>{value.userId}</td>
              <td
              >
                {value.title}</td>
              <td>{value.completed ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
