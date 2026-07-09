import React, { useState } from 'react'

const App = () => {

  const [Name, setName] = useState("Easyskill");
  const [Email, setEmail] = useState("Easyskill@gmail.com");

  return (
    <div>
      <input type="text" placeholder="Enter email here..."
        onChange={(e) => {
          console.log(e.target.value)
          setName(e.target.value)

        }}

        value={Name} />

      <h1>Name : {Name}</h1>

      <br />
      <input type="text" placeholder="Enter username here..."
        onChange={(e) => {
          console.log(e.target.value)
          setEmail(e.target.value)

        }}

        value={Email} />

      <h1>Email : {Email}</h1>

      <br />
      <button onClick={() => {
        setName("")
      }}>Click Me!</button>
    </div>
  )
}

export default App
