import { Routes } from "./Routes"
import { Providers } from './utils/tanstack-query/Provider'


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
