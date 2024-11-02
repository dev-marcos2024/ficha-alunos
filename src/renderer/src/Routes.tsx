import { Route, Router } from "electron-router-dom";
import { Home } from "./pages/Home";
import { Ficha } from "./pages/PageFicha/Ficha";

// Criando as Rotas
export function Routes(){
  return(
    <Router
      main={
        <>
          <Route path="/" element={<Home/>}/>
          <Route path="/ficha" element={<Ficha/>}/>
        </>
      }
    />
  )
}
