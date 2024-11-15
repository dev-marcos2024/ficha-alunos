import { Route, Router } from "electron-router-dom";
import { Formulario } from "./pages/Formulario/Formulario";
import { Ficha } from "./pages/PageFicha/Ficha";
import { Teste } from "./pages/teste";
import { Menssage } from "./components/Menssage/Alerta";

// Criando as Rotas
export function Routes(){
  return(
    <Router
      main={
        <>
          <Route path="/" element={<Formulario/>}/>
          <Route path="/menssage" element={<Menssage/>}/>
          <Route path="/ficha" element={<Ficha/>}/>
          {/*<Route path="/" element={<Teste/>}/>*/}
        </>
      }
    />
  )
}