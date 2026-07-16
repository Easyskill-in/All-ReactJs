import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [Count, setCount] = useState(0)
  const [Product, setProduct] = useState([])

  async function fetchData() {
    try {
      const Data = await axios.get("https://fakestoreapi.com/products")
      console.log(Data.data)
      setProduct(Data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1>Hello Users {Count}</h1>
      <br />
      <button onClick={() => { setCount(c => c + 1) }}>Click Me</button>

      <hr />
      <div className="main">

        {Product.map((value, index) => (
          <div key={index} className='p'>
            <img src={value.
              image} alt="" />
            <p>{value.title}</p>
            <p>{value.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
