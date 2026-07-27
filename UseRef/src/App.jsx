import React, { useRef, useState } from 'react'

const App = () => {
  const [Count, setCount] = useState(0)
  let i = useRef(0);

  let value = useRef(null);
  console.log("Easyskill");

  return (
    <div>
      <h1 ref={value}>Hello World</h1>
      <h1>Count {Count}</h1>
      <h1>I {i.current}</h1>
      <br />
      <button onClick={() => {
        setCount(c => c + 1)
        // i++;

      }}>click me!</button>
      <button onClick={() => {
        i.current = i.current + 1;
        console.log(i.current)
        console.log(value.current)

        if (i.current % 2 == 0) {
          value.current.style.color = "green"
        } else {
          value.current.style.color = "red"
        }

      }}>click  button!</button>
    </div>
  )
}

export default App
