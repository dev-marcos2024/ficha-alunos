import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Actions = ()=>{
  const [display, setDisplay] = useState<boolean>(false);

 async function handlePrint() {
    setDisplay(true);
    await window.api.sendPrintRequest();
    setTimeout(() => setDisplay(false), 1000);
  }

    return(
        <div className={`${styles.actions} ${display && "d-none"}`}>
          <Link className="btn btn-outline-danger bg-slate-950 flex items-center" to='/'>
            <i className="bi bi-arrow-left mr-1 text-2xl font-bold"></i>
            Voltar
          </Link>
          <button onClick={handlePrint} type="button" className="btn btn-outline-danger bg-slate-950 flex items-center">
            <i className="bi bi-printer-fill mr-1 text-2xl font-bold"></i>
            Imprimir
          </button>
        </div>
    )
}