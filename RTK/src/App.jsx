import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Store/CountSlice'

const App = () => {
  const Data = useSelector(state => state.Count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{Data.value}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>decrement</button>
    </div>
  )
}

export default App
