import styles from './style.module.css'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { Actions } from './Acitions'

export const Ficha= ()=>{
  return(
    <div className={styles.folhaA4}>
      <Actions/>
      <Header />
      <Main />
      <div className={styles.assinatura}>
        <strong>Assinatura do Secretário(a) Escolar</strong>
        <div></div>
      </div>
      <Footer />
    </div>
  )
}