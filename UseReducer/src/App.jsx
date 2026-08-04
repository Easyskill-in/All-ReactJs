import React, { useReducer } from 'react'


function reducer(state, action) {
  console.log({ action });

  if (action.type == "inr") {

    return state + 1
  } else if (action.type == "dec") {
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

  // console.log(useReducer(reducer, 0))
  const [state, dispatch] = useReducer(reducer, 0)
  console.log({ state });

  return (
    <div>
      <h1>App Component</h1>
      <hr />

      <h2>Count {state}</h2>
      <button onClick={() => { dispatch({ type: "inr" }) }}>Click me!</button>
      <br />
      <button onClick={() => { dispatch({ type: "dec" }) }}>Click me!</button>
      <br />
      <button onClick={() => { dispatch({ type: "" }) }}>Click me!</button>
      <br />
      <button onClick={() => { dispatch({ type: "inrby", payload: 5 }) }}>Click me 5!</button>
      <br />
      <button onClick={() => { dispatch({ type: "inrby", payload: 10 }) }}>Click me 10!</button>
    </div>
  )
}

export default App
