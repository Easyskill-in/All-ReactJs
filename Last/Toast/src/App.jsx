import React, { useEffect, useState } from 'react'
import { Flip, Slide, toast, Zoom } from 'react-toastify'

const App = () => {

  const [C, A] = useState(0)
  useEffect(() => {
    // This will run once when the component mounts
    console.log('App component mounted')

    // toast("Message")
    const ID1 = toast.success("Message", {
      position: "bottom-right"
    })

    console.log({ ID1 })

  }, [])


  return (
    <div>
      <h1>Hello, React!</h1>


      <button onClick={() => {
        A(c => c + 1)
        // toast.success("Hello")
        // toast.info("Hello")
        // toast.warning("Hello")
        toast.error("Hello " + C, {
          // hideProgressBar: !true,
          // closeOnClick: !false,
          // theme: "dark"
          // theme: "colored",
          // transition: Slide

        })
      }}>Click Me!</button>
    </div>
  )
}

export default App


/*
import { toast } from 'react-toastify';

const handleSubmission = async () => {
  // 1. Show loading toast
  const toastId = toast.loading("Please wait...");

  try {
    // Perform your async task (e.g., API call)
    await apiCall();

    // 2. Update to success
    toast.update(toastId, {
      render: "Success!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
      closeButton: true,
    });
  } catch (error) {
    // 3. Update to error
    toast.update(toastId, {
      render: "Something went wrong",
      type: "error",
      isLoading: false,
      autoClose: 3000,
      closeButton: true,
    });
  }
};


*/