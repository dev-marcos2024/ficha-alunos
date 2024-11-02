import styles from './style.module.css'
import avatar from '../../assets/avatar.jpg'
import logo from '../../assets/logo.jpg'

export const Header = () =>{

  return (
    <header className={styles.header}>
      <div className={styles.foto}>
        <img src={avatar} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p>CEMEB VEREADOR LAERTE RETONDO</p>
        <p>Rua: Geraldo Ferraz, nº 528 – Rio das Pedras, Itupeva-SP</p>
        <p>CEP:13299-144 Tel: (11) 4496-5121 ou (11) 4496-5048</p>
        <p>e-mail: cemeblretondo@itupeva.sp.gov.br</p>
      </div>
    </header>
  )
}