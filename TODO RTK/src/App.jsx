import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddTask from './Pages/AddTask'
import UpdateTask from './Pages/UpdateTask'
import Task from './Pages/Task'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  // const Data = useSelector(state => state.Task)
  // console.log(Data);

  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/update/:id' element={<UpdateTask />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </div>
  )
}

export default App
