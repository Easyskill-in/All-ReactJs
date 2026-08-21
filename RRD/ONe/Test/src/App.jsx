import React from 'react'
import About from './Pages/About/About'
import Product from './Pages/Product/Product'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <h1>Hello From App Component</h1>
      {/* <About />
      <Product />
      <Home /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Product' element={<Product />} />
      </Routes>

      <h1>Footer</h1>
    </div>
  )
}

export default App
