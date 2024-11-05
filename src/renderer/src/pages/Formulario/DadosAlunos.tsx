import { DropdownsSearch } from "../../components/Dropdowns/Dropdowns"
import { InputGroup } from "../../components/Inputs/InputGrup";
import { InputText } from "../../components/Inputs/InputText";
import { SelectSearch } from "../../components/Select/Select"
import { useCidades, useUf } from "../../utils/tanstack-query/queries"
import styles from './style.module.css'
import { FormikErrors, FormikTouched } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { ButtonRadio } from '../../components/Buttons/ButtonRadio'

interface Props{
  touched:  FormikTouched<TypeForm>,
  errors: FormikErrors<TypeForm>
}

export const DadosAlunos = ({touched, errors}:Props)=>{
    const ufs = useUf();
    const cidades = useCidades('SP');

    return (
      <fieldset className={styles.fieldset}>
        <legend className='text-gray-400'>Dados do Aluno</legend>

        <div className="row mb-3">
          <div className='col-5'>
            <InputGroup id="ra" placeholder="Digite o RA" texto="RA" nome='ra' touched={touched.ra}
                        errors={errors.ra} />
          </div>
          <div className='col-4'>
            <InputGroup id="rm" placeholder="Digite o RM" texto="RM" nome='rm' touched={touched.rm}
                        errors={errors.rm} />
          </div>
        </div>

        <InputText
          placeholder="Dogite o nome"
          texto="Nome do Aluno"
          tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome} />

        <div className="row mb-3">
          <InputText
            placeholder="Dogite o nome"
            texto="Nome do Aluno"
            tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome} />
          <InputText
            placeholder="Dogite o nome"
            texto="Nome do Aluno"
            tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome} />
          <InputText
            placeholder="Dogite o nome"
            texto="Nome do Aluno"
            tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome} />
        </div>

        <div className='col-4'>
          <InputGroup id="rm" placeholder="Digite o RM"
              texto={<ButtonRadio texto='RG' nome='alunoRg' touched={touched.alunoRg} errors={errors.alunoRg}/>}
              nome='alunoRgCpf' touched={touched.rm}
              errors={errors.rm} />
        </div>


        <DropdownsSearch nome="Municipio de Nascimento" list={ufs} />
      </fieldset>
    )
}