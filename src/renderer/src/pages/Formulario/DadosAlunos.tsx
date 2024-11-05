import { DropdownsSearch } from "../../components/Dropdowns/Dropdowns"
import { InputGroup } from "../../components/Inputs/InputGrup";
import { InputText } from "../../components/Inputs/InputText";
import { SelectSearch } from "../../components/Select/Select"
import { useCidades, useUf } from "../../utils/tanstack-query/queries"
import styles from './style.module.css'


export const DadosAlunos = ()=>{
    const ufs = useUf();
    const cidades = useCidades('SP');

    return (
        <fieldset className={styles.fieldset}>
                <legend>Dados do Aluno</legend>

                <div className="row mb-3">
                    <div className= 'col-5'>
                      <InputGroup  id="ra" placeholder="Digite o RA" texto="RA" name='ra'/>
                    </div>
                    <div className= 'col-4'>
                      <InputGroup id="rm" placeholder="Digite o RM" texto="RM" name='rm'/>
                    </div>
                </div>
                
                <InputText id="inp" isValido={true} placeholder="Dogite o nome" texto="Nome do Aluno" tipo="text" />
                <DropdownsSearch nome="Municipio de Nascimento" list={ufs}/>
        </fieldset>
    )
}