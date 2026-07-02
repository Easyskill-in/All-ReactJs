import React from 'react'
import { useState } from 'react';

const App = () => {
  let i = 0;
  let [count, setCount] = useState(0);
  // console.log(useState(0))
  return (
    <div>
      <h1>Count {count} {i}</h1>
      <button onClick={() => {
        setCount((e) => {
          return e + 1
        })
        setCount(e => e + 1)
        setCount(e => e + 1)
        setCount(e => e + 1)
        setCount(e => e + 1)
        setCount(e => e + 1)

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        i++;
        console.log(i)
      }}>Click Me!</button>
    </div>
  )
}

export default App
