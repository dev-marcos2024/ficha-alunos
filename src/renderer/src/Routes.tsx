import { Route, Router } from "electron-router-dom";
import { Formulario } from "./pages/Formulario/Formulario";
import { Ficha } from "./pages/PageFicha/Ficha";

// Criando as Rotas
export function Routes(){
  return(
    <Router
      main={
        <>
          <Route path="/" element={<Formulario/>}/>
          <Route path="/ficha" element={<Ficha/>}/>
        </>
      }
    />
  )
}
