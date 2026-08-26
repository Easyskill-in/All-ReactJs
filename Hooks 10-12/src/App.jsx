import React, { createContext } from 'react'
import A from './Components/A'


export const DataContext = createContext()

const App = () => {
  const Data = {
    username: "Easyskill",
    email: "easyskill@gmail.com"
  }
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <DataContext.Provider value={Data}>
        <A />
      </DataContext.Provider>
    </div>
  )
}

export default App

/*
Prop drilling occurs when data is passed through multiple nested React components, even if intermediate components don’t use it, creating unnecessary chains of props
*/
