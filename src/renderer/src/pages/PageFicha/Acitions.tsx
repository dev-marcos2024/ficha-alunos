import styles from './style.module.css'
import { Link } from 'react-router-dom'


export const Actions = ()=>{
  function handlePrint(){
    // @ts-ignore
    window.customApi.sendPrintRequest();
  }

    return(
        <div className={styles.actions}>
          <Link className="btn btn-outline-danger" to='/'>Editar</Link>
          <button onClick={handlePrint} type="button" className="btn btn-outline-danger">Imprimir</button>
        </div>
    )
}