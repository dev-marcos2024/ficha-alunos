import { Link } from "react-router-dom"
import { useCidades, useUf } from '../utils/tanstack-query/queries'
import { useState } from 'react'

export const Home = ()=>{
  const { data: cidades, isLoading, error } = useCidades('SP');
  const uf = useUf();

  function handleClick() {
    console.log(uf.data);
  }

  return(
    <div className='container'>
      <h1>Pagina Home</h1>

      <button type="button" className="btn btn-danger me-5"
          onClick={handleClick}
      >Dark</button>



      <Link to='/ficha'>Ir para ficla</Link>
    </div>
  )
}