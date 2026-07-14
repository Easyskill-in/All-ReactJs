import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [Num, setNum] = useState(0)

  console.log("Easyskill")
  // useEffect(() => {
  //   console.log("Hello World")
  // }, []);
  useEffect(() => {
    console.log("Hello World")
  }, [Num]);

  return (
    <div>
      <p>You clicked Count : {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <br />
      <br />
      <br />
      <br />
      <p>You clicked Number: {Num} times</p>
      <button onClick={() => setNum(Num + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App
