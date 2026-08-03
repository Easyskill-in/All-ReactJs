import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Context/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo>
      <App />
    </Todo>
  </StrictMode>,
)
