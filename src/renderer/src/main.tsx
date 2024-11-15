import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/global.scss'
import { ContextMenssage } from './contexts/ContextMenssage'
import { Menssage } from './components/Menssage/Alerta'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextMenssage>
      <App />
      <Menssage/>
    </ContextMenssage>
  </React.StrictMode>
)
