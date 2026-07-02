import React from 'react'
import { useState } from 'react'
const App = () => {
  let i = 0;

  const [count, setCount] = useState(0)
  // console.log(useState(0))

  console.log("Hii")
  return (
    <div>
      <h1>Count {count}</h1>
      <h1>I {i}</h1>
      <button onClick={() => {

        setCount(value => value + 1)
        setCount(value => value + 1)
        setCount(value => value + 1)
        setCount(value => value + 1)
        setCount(value => value + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // console.log({ count })
        i++
        console.log({ i })
      }}>Increment</button>
    </div >
  )
}

export default App
