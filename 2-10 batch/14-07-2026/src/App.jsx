import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  console.log("Easyskill")
  useEffect(() => {
    console.log("Hello World")
  }, [number]);

  // useEffect(() => {
  //   console.log("Hello World")
  // });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <hr />
      <hr />
      <hr />

      <h1>Number : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App
