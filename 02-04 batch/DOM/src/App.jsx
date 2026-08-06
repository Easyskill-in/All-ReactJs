import React from 'react'
import About from './Pages/About'
import Product from './Pages/Product'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>

      <nav>
        <ul>
          <li> <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              marginRight: "15px",
            })}
          >
            Home
          </NavLink></li>
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/product">Product Page</Link></li>
        </ul>
      </nav>
      {/* <About />
      <Product /> */}

      <Routes>
        <Route path='/' element={<h2>CO<sub>2</sub></h2>} />
        <Route path='/about' element={<About />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
