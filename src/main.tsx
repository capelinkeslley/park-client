import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CreateUser } from './CreateUser'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreateUser />
  </React.StrictMode>,
)
