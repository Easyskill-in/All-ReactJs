import React, { useEffect, useState } from 'react'

const App = () => {

  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Users, setUsers] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const obj = { Username, Password, Email }
    console.log(obj)

    setUsers(prev => [...prev, obj])

    setPassword("")
    setUsername("")
    setEmail("")
  }
  // let i=0;
  // i = i+10
  useEffect(() => {
    console.log(Users)
  }, [Users])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='username'
          placeholder='Enter Your Username'
          value={Username}
          onChange={(e) => {
            console.log(e.target.value)
            setUsername(e.target.value)
          }} />
        <br />
        <br />
        <input type="password"
          name='password'
          placeholder='Enter Your password'
          value={Password}
          onChange={(e) => {
            console.log(e.target.value)
            setPassword(e.target.value)
          }} />
        <br />
        <br />
        <input type="email"
          name='email'
          placeholder='Enter Your email'
          value={Email}
          onChange={(e) => {
            console.log(e.target.value)
            setEmail(e.target.value)
          }} />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>

      <hr />
      {/* <h1>Username : {Username}</h1>
      <h1>Password : {Password}</h1>
      <h1>Email : {Email}</h1> */}
      <table border={1} cellPadding={2} cellSpacing={3}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.Username}</td>
              <td>{value.Email}</td>
              <td>{value.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
