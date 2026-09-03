import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ToastContainer position="top-center" /> */}
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop={true}
      rtl={!false}
      pauseOnFocusLoss
      draggable
    />

  </StrictMode>,
)
