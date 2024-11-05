import { Routes } from "./Routes"
import { Providers } from './utils/tanstack-query/Provider'
import { FormProvider } from './contexts/ContextForm'


function App(){

  return (
    <div>
      <Providers>
        <FormProvider>
          <Routes/>
        </FormProvider>
      </Providers>
    </div>
  )
}

export default App
