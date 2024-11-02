import { Link } from "react-router-dom"


export const Home = ()=>{

  return(
    <div className='container'>
      <h1>Pagina Home</h1>
      <Link to='/ficha'>Ir para ficla</Link>
    </div>
  )
}