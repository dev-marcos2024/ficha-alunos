import { AlunoInfo} from '../../../../types/SchemaForm';
import { DadosAlunos } from "./DadosAlunos";
import styles from './style.module.css'
import { useFormContext } from '../../contexts/ContextForm'

export const Formulario = ()=>{
  const { handleSubmit} = useFormContext();

  const onSubmit = (data: AlunoInfo) => {
    console.log(data);
  };

  return(
    <div className={`container`}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <DadosAlunos/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}