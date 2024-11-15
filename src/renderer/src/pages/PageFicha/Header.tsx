import styles from './style.module.css'
import logo from '../../assets/logo.jpg'
import { TypeForm } from '../../models/SchemaForm'
import { useLocation } from 'react-router-dom'


export const Header = () =>{
  const data: TypeForm = useLocation().state;
  
  return (
    <header className={styles.header}>
      <div className={`${styles.foto}`}>
        <img className='h-full' src={`local-file://uploads/${data && data.fileName}`} alt="Foto do aluno" />
      </div>
      <div>
        <img src={logo} alt="Logo Prefeitura" />
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