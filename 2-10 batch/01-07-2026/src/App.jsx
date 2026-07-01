import React from 'react'
import Card from './Components/Card'

const App = () => {

  const isActive = !true;

  const username = "MyName"

  const List = [
    { id: 101, title: "A", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "https://images.unsplash.com/photo-1781276798473-258ee0e096d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 102, title: "B", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 103, title: "C", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "https://images.unsplash.com/photo-1781977802229-623ba6747f8a?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 104, title: "D", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "https://images.unsplash.com/photo-1777723970320-c02a42427e64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 105, title: "E", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "" },
    { id: 106, title: "F", desc: "sdh;a askhdk;a kahsd ahd asdh ", image: "https://images.unsplash.com/photo-1778526079007-bc5dd8f1a2a1?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 107, image: "https://plus.unsplash.com/premium_photo-1779753391100-6ed78213c5b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]

  return (
    <div className="app">
      {/* {isActive ? <h1>Active</h1> : <h1>Not Active</h1>} */}

      {List.map((value, index) => (<Card title={value.title} image={value.image} id={value.id} desc={value.desc} />))}
      {/* {List.map((value, index) => (<div className='a'>
        <h1>{value.id}</h1>
        <h1>{value.title}</h1>
        <h1>{value.desc}</h1>
      </div>
      ))} */}

    </div>
  )
}

export default App
// {List.map((value, index) => {
//   return <div className='a'>
//     <h1>{value.id}</h1>
//     <h1>{value.title}</h1>
//     <h1>{value.desc}</h1>
//   </div>
// })}
