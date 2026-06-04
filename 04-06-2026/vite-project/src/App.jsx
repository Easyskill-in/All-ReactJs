import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Auth from './Pages/Auth'

const App = () => {
  return (
    <div>
      <h1>Welcome to React Router v6</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<Auth />}>
          <Route path='a' element={<h1>AAAAAAAA</h1>}></Route>
          <Route path='b' element={<h1>BBBBBBBB</h1>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
