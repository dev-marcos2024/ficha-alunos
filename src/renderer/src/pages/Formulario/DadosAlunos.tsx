import { DropdownsSearch } from "../../components/Dropdowns/Dropdowns"
import { InputGroup } from "../../components/Inputs/InputGrup";
import { InputText } from "../../components/Inputs/InputText";
import { useCidades, useUf } from "../../utils/tanstack-query/queries"
import styles from './style.module.css'
import { FormikErrors, FormikTouched } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputOption2 } from "../../components/Inputs/InputOption2";
import { RadioRaca } from "../../components/Radios/RadioRAca";
import { AlunosSexo } from "../../components/Radios/RadioSexo";
import { Select } from "../../components/Selects/Select";

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

        <div className="flex flex-col gap-6">
          <div className="row">
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
            placeholder="Digite o nome"
            texto="Nome do Aluno"
            tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome}
          />

          <div className="flex gap-4">
            <InputOption2 nome="alunosRgCpf" texto1="RG" texto2="Cpf" texto3="RG ou CPF do Aluno" errors={errors}
                          touched={touched} />
            <InputText
              placeholder="Digite o Nis"
              texto="Nis do Aluno"
              tipo="text" nome='alunoNis' touched={touched.alunoNis} errors={errors.alunoNis} />
          </div>

          <div className="flex justify-between">
            <RadioRaca nome="alunoRaca" />
            <AlunosSexo nome="alunoSexo" />
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <InputText
                placeholder="Digite a nome nacionalidade"
                texto="Nacionalidade"
                tipo="text" nome='alunoNacionalidade' touched={touched.alunoNacionalidade}
                errors={errors.alunoNacionalidade}
              />
            </div>
            <div className="flex-1 bg-amber-200">
              <Select name="estadoCicil" valueDisabled="Estado Civil" errors={errors.estadoCicil}
                      touched={touched.estadoCicil} optionList={['Solteiro', 'Casado', 'Divorciado', 'Viúvo']} />
            </div>
          </div>

          <div className="flex">

          </div>

          <DropdownsSearch nome={'Alo'} list={ufs.data} texto={'Cidade'}/>
        </div>
      </fieldset>
    )
}