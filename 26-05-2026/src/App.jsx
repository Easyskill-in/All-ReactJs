import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [Count, setCount] = useState(0);
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function fn() {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products")

        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log("Error : ", error)
      } finally {
        setLoading(false)
      }
    }
    fn()
  }, [])


  if (Loading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h1 onClick={() => {
        setCount(c => c + 1)
      }}>Count : {Count}</h1>

      <hr />
      <div className="main">

        {Data.map((value, index) => (
          <div key={index}>
            <h1>{value.title}</h1>
            <img src={value.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App


// https://dummyjson.com/posts