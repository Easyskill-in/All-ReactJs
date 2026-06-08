import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {
  const [Count, setCount] = useState(0);
  let i = 0;
  let x = useRef(0);
  let e = useRef(null);
  console.log(x)


  return (
    <div>
      <h1>X : {x.current}</h1>
      <hr />
      <h1>I : {i}</h1>
      <hr />
      <h1>Hello {Count}</h1>
      <br />
      <button onClick={() => {

        if (x.current % 2 == 0) {

          e.current.style.color = "green"
        } else {
          e.current.style.color = "red"
        }

        setCount(c => c + 1)
      }}>Click Me!</button>
      <button onClick={() => {
        i += 1;
        console.log("I : ", i);
      }}>Set I</button>
      <button onClick={() => {
        x.current = x.current + 1
        console.log("X : ", x);
      }}>Set X</button>

      <hr />
      <br />
      <br />
      <h1 ref={e}>Hello Ref</h1>
    </div>
  )
}

export default App
