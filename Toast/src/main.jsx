import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Flip, ToastContainer, Zoom } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={true}
      draggable
      pauseOnHover={false}
      theme="colored"
      transition={Zoom}
      limit={5}
    />
  </StrictMode>,
)




//URL :-
// https://fkhadra.github.io/react-toastify/introduction/
//https://www.npmjs.com/package/react-toastify