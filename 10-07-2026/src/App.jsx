import React, { useEffect, useState } from 'react'

const App = () => {
  const [User, setUser] = useState({
    username: "",
    password: "",
    email: "",
    option: ""
  })

  const [Data, setData] = useState([])

  function handleChange(e) {
    // if (e.target.name === "username") {
    //   setUser(prev => ({ ...prev, username: e.target.value }))
    // } else if (e.target.name === "password") {
    //   setUser(prev => ({ ...prev, password: e.target.value }))
    // } else if (e.target.name === "email") {
    //   setUser(prev => ({ ...prev, email: e.target.value }))
    // } else {
    //   setUser(User)
    // }


    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(User)
    setData(prev => [...prev, User])
    setUser({
      id: Date.now(),
      username: "",
      password: "",
      email: "",
      option: ""
    })
  }


  // console.log(User)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter your username"
          name='username'
          value={User.username}
          onChange={handleChange} />
        <br />
        <br />
        <input type="password" name='password' placeholder="Enter your password" value={User.password} onChange={handleChange} />
        <br />
        <br />
        <input type="email" name='email' placeholder="Enter your Email" value={User.email} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="male">Male</label>
        <input type="radio" name='gender' value="Male" onChange={handleChange} id='male' />
        <br />
        <br />
        <label htmlFor="female">female</label>
        <input type="radio" name='gender' value="Female" onChange={handleChange} id='female' />
        <br />
        <br />
        <select name="option" id="" onChange={handleChange}>
          <option value="" hidden>Select Any Option</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
          <option value="option 5">option 5</option>
          <option value="option 6">option 6</option>
          <option value="option 7">option 7</option>
          <option value="option 8">option 8</option>
        </select>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
