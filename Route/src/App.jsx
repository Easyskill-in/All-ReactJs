import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Greet from './pages/Greet'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <h1>App Page</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/greet/A">Greet</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/greet/:myname" element={<Greet />} /> */}
        <Route path="/greet/:name" element={<Greet />} />
      </Routes>
    </div >
  )
}

export default App
