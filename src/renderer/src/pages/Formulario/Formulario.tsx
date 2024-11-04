import { Link } from "react-router-dom"
import { useCidades, useUf } from '../../utils/tanstack-query/queries';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AlunoInfo, alunoSchema } from "../../../../types/SchemaForm";
import { DadosAlunos } from "./DadosAlunos";
import styles from './style.module.css'

export const Formulario = ()=>{
  const cidades = useCidades('SP');
  const uf = useUf();
  const {handleSubmit, register, formState:{errors}, getValues} = useForm<AlunoInfo>({
    resolver: zodResolver(alunoSchema),
 });


  return(
    <div className={`container`}>
      <form className={styles.form}>
        <DadosAlunos/>
      </form>
    </div>
  )
}