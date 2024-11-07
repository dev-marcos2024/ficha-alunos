import { Routes } from "./Routes"
import { Providers } from './utils/tanstack-query/Provider'
import './assets/app.css'
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';


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
