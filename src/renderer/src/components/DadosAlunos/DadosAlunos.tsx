import { SelectSearch } from "../Selects/SelectSearch"
import { InputGroup } from "../Inputs/InputGrup";
import { InputText } from "../Inputs/InputText";
import { FormikErrors, FormikTouched, useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputOption2 } from "../Inputs/InputOption2";
import { RadioRaca } from "../Radios/RadioRAca";
import { AlunosSexo } from "../Radios/RadioSexo";
import { Select } from "../Selects/Select";
import { useUf } from "../../utils/tanstack-query/queries"
import { useState } from 'react'
import { Certidao } from '../Certidao/Index'
import { InputDate } from '../Inputs/InputDate'
import { InputRaMask } from "../Inputs/InputsMask/InputMackRa";
import { InputFile } from '../Inputs/InputFile'
import { SelectInput } from '../Selects/SelectInput'


interface Props{
  touched:  FormikTouched<TypeForm>,
  errors: FormikErrors<TypeForm>,
  setTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void
  setErros: (field: string, message?: string) => void
  handleFile: (file: File | null) => void
}

export const DadosAlunos = ({touched, errors, setTouched, setErros, handleFile}:Props)=>{

  const {values} = useFormikContext<TypeForm>()
    const [uf1, setUf1] = useState('');
    const [uf2, setUf2] = useState('');
    const ufs = useUf();



    return (
      <fieldset className={`fieldset`}>
        <legend className='text-gray-400 mb-4'>Dados do Aluno</legend>

        <div className="flex flex-col gap-6">
          
          <div className="flex gap-6">
            <div className='max-w-[270px]'>
              <InputRaMask nome='ra' touched={touched.ra} errors={errors.ra} valor={values.ra} />
            </div>
            <div className='max-w-48'>
              <InputGroup id="rm" placeholder="" texto="RM" nome='rm' touched={touched.rm} errors={errors.rm} disabled= {true }/>
            </div>
            <div className="">
              <InputFile  nome= 'fotoAluno' touched={touched.fotoAluno}
                  errors={errors.fotoAluno} setFile={handleFile}/>
            </div>
          </div>

          <InputText
            placeholder="Digite o nome"
            texto="Nome do Aluno"
            tipo="text" nome='alunoNome' touched={touched.alunoNome} errors={errors.alunoNome}
          />

          <div className="flex gap-4">
            <InputOption2 nome="alunosRgCpf" texto1="RG" texto2="CPF" texto3="RG ou CPF do Aluno" errors={errors}
                          touched={touched} />
            <InputText
              placeholder="Digite o Nis"
              texto="Nis do Aluno"
              tipo="text" nome='alunoNis' touched={touched.alunoNis} errors={errors.alunoNis} />

            <InputDate nome='DataNascimentoAluno' text='Data Nascimento'
                       touched={touched.DataNascimentoAluno} errors={errors.DataNascimentoAluno} />
          </div>

          <div className="flex justify-evenly">
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
            <div className="flex-1">
              <Select name="estadoCicil" valueDisabled="Estado Civil" errors={errors.estadoCicil}
                      touched={touched.estadoCicil} optionList={['Solteiro', 'Casado', 'Divorciado', 'Viúvo']} />
            </div>
          </div>

          <div className="flex gap-6">

            <div className="col">
              <SelectSearch nome={'municipioNascimento'} texto="Município de Nascimento:" setErros={setErros} setTouched={setTouched}
                 touched={touched.municipioNascimento} errors={errors.municipioNascimento} uf={uf1}
              />
            </div>

            <div className="col max-w-48">
              <SelectInput name={"UfNascimento"} errors={errors.UfNascimento} touched={touched.UfNascimento}
                           optionList={ufs.data} placeholder={"Estado"} setSelected={setUf1}/>
            </div>

            <div className="col">
              <SelectSearch nome={'comarcaNascimento'} texto="Município/Comarca de Nascimento:" setErros={setErros} setTouched={setTouched}
                 touched={touched.comarcaNascimento} errors={errors.comarcaNascimento} uf={uf2}
              />
            </div>

            <div className="col max-w-48">
              <SelectInput name={"ufComarcaNascimento"} errors={errors.ufComarcaNascimento} setSelected={setUf2}
                           touched={touched.ufComarcaNascimento} optionList={ufs.data} placeholder={"Estado"}/>
            </div>

          </div>

          <div className="flex">
            <Certidao/>
          </div>

        </div>
      </fieldset>
    )
}