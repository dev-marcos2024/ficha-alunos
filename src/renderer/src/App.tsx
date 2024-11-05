import { Routes } from "./Routes"
import { Providers } from './utils/tanstack-query/Provider'
import './assets/app.css'


function App(){

  return (
    <div>
      <Providers>
          <Routes/>
      </Providers>
    </div>
  )
}

export default App
