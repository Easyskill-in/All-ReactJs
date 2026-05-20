import React, { useState, useEffect } from 'react'

const App = () => {
  const [Count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  let i = 0;

  i++;
  console.log("The Value of i is ", i)

  // useEffect(effect: React.EffectCallback, deps ?: React.DependencyList)

  // useEffect(() => {
  //   // console.log("The Value of i is ", i)
  //   console.log("The Value of Count is ", Count)
  //   console.log("The Value of isActive is ", isActive)
  // },[])
  // useEffect(() => {
  //   // console.log("The Value of i is ", i)
  //   console.log("The Value of Count is ", Count)
  //   console.log("The Value of isActive is ", isActive)
  // })
  useEffect(() => {
    // console.log("The Value of i is ", i)
    console.log("The Value of Count is ", Count)
    console.log("The Value of isActive is ", isActive)
  }, [isActive])

  return (
    <div>
      <h1>App.jsx</h1>
      <h1>Count {Count}</h1>
      <hr />
      <button onClick={() => {
        setCount(c => c + 1)
      }}>Count</button>
      <br />
      <br />
      <button onClick={() => {
        setIsActive(c => !c)
      }}>Toggle Active State</button>
    </div>
  )
}

export default App
