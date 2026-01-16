import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './context/TodoContext.jsx'
import './styles/main.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <App />
  // </StrictMode>,
)
