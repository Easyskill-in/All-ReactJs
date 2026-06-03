import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Greet from './Components/Greet'
const App = () => {
  return (
    <div>
      {/* <Home />
      <About />
      <Products /> */}
      <Navbar />
      <div className="main">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Products />} />
          <Route path='/greet/:name' element={<Greet />} />
        </Routes>
      </div>
      <h1>Footer</h1>
    </div>

  )
}

export default App
