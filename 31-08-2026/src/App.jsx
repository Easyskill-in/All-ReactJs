import React, { useReducer, useState } from 'react'


function reducer(state, action) {
  // console.log({ state })
  // console.log({ action })

  // return state + 1

  if (action.type === "inr") {
    return state + 1
  } else if (action.type === "dcr") {
    if (state <= 0) {
      return 0;
    }
    return state - 1
  } else if (action.type === "inrby") {
    return state + action.payload
  }

  return state;
}

const App = () => {

  // const [Count, setCount] = useState(0)

  // const [state, dispatch] = useReducer(reducer, initialState);

  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>State : {state}</h1>
      <button onClick={() => {
        dispatch({ type: "inr", payload: [12, 13, 14] })
      }}>Click Me!</button>
      <button onClick={() => {
        dispatch({ type: "dcr" })
      }}>Click Me!</button>
      <button onClick={() => {
        dispatch({ type: "inrby", payload: 5 })
      }}>Click Me 5!</button>
      <button onClick={() => {
        dispatch({ type: "inrby", payload: 12 })
      }}>Click Me 12 !</button>
    </div>
  )
}

export default App
