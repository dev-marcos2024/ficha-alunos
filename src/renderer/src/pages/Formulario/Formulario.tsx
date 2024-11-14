import { Formik, Form } from 'formik';
import { AlunoSchema, InitialDateForm } from '../../models/SchemaForm'
import { DadosAlunos } from '../../components/DadosAlunos/DadosAlunos'
import { FiliacaoAluno } from '../../components/Filiacao/Index';
import { Index } from '../../components/Endereco'
import { Matricula } from '../../components/Matricula/Matricula';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'


export const Formulario = () => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSetFile = (file: File | null): void => {
    setFile(file);
  }

  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={async (values) => {
        console.log(await window.api.insertAluno({values}, values.ra.replaceAll('.', '')))
        navigate('/ficha', { state: { ...values, fileName: file && file.name } })
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
            <button type="submit" className="btn btn-primary p-3 font-bold text-xl w-48">
              <i className="bi bi-floppy2-fill mr-2"></i>
              Salvar
            </button>
            <Link className="btn btn-outline-danger" to="/ficha">
              Ficha
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  )
};



