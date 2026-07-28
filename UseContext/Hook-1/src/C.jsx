import React, { useContext } from 'react'
import { MyContext } from './App';
const C = () => {
  const ContextData = useContext(MyContext);
  console.log({ ContextData });

  return (
    <div>
      <h1>C Component {ContextData.Data.name}</h1>
    </div>
  )
}

export default C
