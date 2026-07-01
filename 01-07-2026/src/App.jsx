import React from 'react'
import Card from './Card'

const App = () => {
  // const status = true;
  // const name = false;

  const Data = [
    { id: 1, name: "A", age: 12, status: false },
    { id: 2, name: "B", age: 19, status: false },
    { id: 3, name: "C", age: 22, status: true },
    { id: 4, name: "D", age: 24, status: false },
    { id: 5, name: "E", age: 56, status: true },
  ]

  return (
    <div>


      {Data.map((value, index) => (<Card
        name={value.name} age={value.age} id={value.id} />))}


      {/* <h1>App {name || "Default"}</h1> */}
      {/* <h1>App {name && "Default"}</h1> */}
      {/* <p>Status: {true ? 'Online' : 'Offline'}</p> */}
      {/* 
      {Data.map((value, index) => (
        <div>
          <h1>Id : {value.id}</h1>
          <h1>Name : {value.name}</h1>
          <h1>Age : {value.age}</h1>
          <hr />
          <br />
        </div>)
      )} */}


      {/* 
      {Data.map((value, index) => {
        return <div>
          <h1>Id : {value.id}</h1>
          <h1>Name : {value.name}</h1>
          <h1>Age : {value.age}</h1>
          <hr />
          <br />
        </div>
      })} */}




    </div>
  )
}

export default App
