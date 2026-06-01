import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <h1>Hello From App Page</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <h1>Hello From App Page</h1>
    </div>
  )
}

export default App
