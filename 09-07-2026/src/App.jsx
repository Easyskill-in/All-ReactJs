import React, { useState } from 'react'

const App = () => {

  // const [Name, setName] = useState("Easyskill");
  // const [Email, setEmail] = useState("Easyskill@gmail.com");

  const [User, setUser] = useState({
    username: "",
    email: ""
  })

  return (
    <div>
      <input type="text" placeholder="Enter email here..."
        onChange={(e) => {
          setUser(prev => ({ ...prev, username: e.target.value }))
        }}
        value={User.username} />



      <br />
      <input type="text" placeholder="Enter username here..."
        onChange={(e) => {
          setUser(prev => ({ ...prev, email: e.target.value }))
        }}

        value={User.email} />

      <hr />
      <h1>{User.username} And {User.email}</h1>

    </div>
  )
}

export default App
