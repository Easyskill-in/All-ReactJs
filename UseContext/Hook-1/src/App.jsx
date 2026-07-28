import React, { createContext } from 'react'
import A from './A.jsx'

export const MyContext = createContext();

const App = () => {

  const Data = { id: 101, name: "MyName" }

  return (
    <div style={{ height: "90vh" }}>
      <h1>App Component {Data.name}</h1>
      <MyContext.Provider value={{ key: "value", Data }}>
        <A />
      </MyContext.Provider>
    </div>
  )
}

export default App
