import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Actions = ()=>{
  const [display, setDisplay] = useState<boolean>(false);

  function handlePrint() {
    setDisplay(true);
    // @ts-ignore
    window.customApi.sendPrintRequest();

    setTimeout(() => setDisplay(false), 1000);
  }

    return(
        <div className={`${styles.actions} ${display && "d-none"}`}>
          <Link className="btn btn-outline-danger" to='/'>Editar</Link>
          <button onClick={handlePrint} type="button" className="btn btn-outline-danger">Imprimir</button>
        </div>
    )
}