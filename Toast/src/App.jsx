import React, { useEffect } from 'react'
import { toast, Zoom } from 'react-toastify';
const App = () => {
  useEffect(() => {
    toast.warning("Message")
  }, [])
  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={() => {
        // toast.success("My Message")
        // toast.error("My Message")
        toast.info("My Message")
      }}>Click Me!</button>
      <button onClick={() => {
        // toast.success("My Message")
        toast.success("My Success", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        })
      }}>Success Me!</button>
    </div>
  )
}

export default App
