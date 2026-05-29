import React, { useEffect, useState } from 'react'

const App = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [User, setUser] = useState({
    username: "",
    password: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ ...User })

    setUsername("")
    setEmail("")
    setPassword("")
  }

  function handleChange(e) {

    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))

    // if (e.target.name === "username") {
    //   setUsername(e.target.value)
    // } else if (e.target.name === "password") {
    //   setPassword(e.target.value)
    // }
    // else if (e.target.name === "email") {
    //   setEmail(e.target.value)
    // } else {
    //   console.log("Invalid Input")
    // }
  }


  useEffect(() => {
    console.log(User)
  }, [User])

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="username" value={User.username} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" value={User.password} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label>
          email:
          <input type="email" name="email" value={User.email} onChange={handleChange} />
        </label>
        <br />
        <br />


        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
