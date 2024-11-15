import { Formik, Form } from 'formik';
import { AlunoSchema, InitialDateForm, TypeForm } from '../../models/SchemaForm'
import { DadosAlunos } from '../../components/DadosAlunos/DadosAlunos'
import { FiliacaoAluno } from '../../components/Filiacao/Index';
import { Index } from '../../components/Endereco'
import { Matricula } from '../../components/Matricula/Matricula';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useMenssage } from '../../contexts/ContextMenssage'
import {TypeNewMatricula} from '~/src/types/TypeSqlite'
import { ButtonSubmit } from '../../components/Buttons/ButtonSubmit';



export const Formulario = () => {

  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const c = useMenssage()

  const handleSetFile = (file: File | null): void => {
    setFile(file);
  }

  const handleCeateNewRm = async (obj:TypeNewMatricula, newRm: string)=>{
    const isExist = await window.api.selectByRa(obj.ra);
    if (isExist.length === 0){
      const result = await window.api.criarNovoRm(obj);
      c?.handleMenssage(`Novo Rm Gerado com Sucesso: ${newRm}`, 'bg-green-500')
    }else{
      const msg = `Aluno já tem cadastrado no RM:  ${isExist[0].rm}`
      c?.handleMenssage(msg, 'bg-yellow-300')
    }
  }

  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={async (values) => {

        const obj = {
          nome: values.alunoNome,
          ra: values.ra.replaceAll('.', '').slice(0, 9),
          dig: values.ra.slice(-1)
        }
        await handleCeateNewRm(obj, values.rm);

        console.log(await window.api.insertAluno(values, values.ra.replaceAll('.', '')))
        navigate('/ficha', { state: { ...values, fileName: file && file.name } });

        if (file) {
          await window.api.uploadFile({ path: file.path, name: file.name })
        }
      }}
    >
      {({ touched, errors, setFieldTouched, setFieldError, values }) => (
        <Form className="container mt-4  max-w[1024px]">
          <div className="form-group flex flex-col gap-6">
            <DadosAlunos
              errors={errors}
              touched={touched}
              setErros={setFieldError}
              setTouched={setFieldTouched}
              handleFile={handleSetFile}
            />
    
            {values.ufComarcaNascimento !== '' && <FiliacaoAluno />}
    
            {(values.dataNascimentoMae || values.dataNascimentoPai) && <Index />}
    
            {values.enderecoNumero && <Matricula />}
          </div>
    
          <div className="flex p-10 items-center justify-center">
            <ButtonSubmit/>
            <Link className="btn btn-outline-danger" to="/ficha">
              Ficha
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  )
};



