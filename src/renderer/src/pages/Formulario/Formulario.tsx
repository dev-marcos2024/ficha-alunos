import { Formik, Form} from 'formik';
import { AlunoSchema, InitialDateForm } from '../../models/SchemaForm'
import { DadosAlunos } from './DadosAlunos'
import { FiliacaoAluno } from '../../components/Filiacao/Index';
import { Index } from '../../components/Endereco'
import { Matricula } from '../../components/Matricula/Matricula';
import { Link } from 'react-router-dom';


export const Formulario = () => {


  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={(values) => {
        console.log('Dados do aluno:', values);
        // Armazena os dados no sessionStorage (opcional) para serem acessados na próxima página
        sessionStorage.setItem('dadosAluno', JSON.stringify(values));

        // Redireciona para a página "/ficha"
        window.location.href = '#/main/ficha';

      }}
    >
      {({ touched, errors , setFieldTouched, setFieldError, values}) => (

        <Form className="container mt-4  max-w[1024px]">

          <div className="form-group flex flex-col gap-6">

            <DadosAlunos errors={errors} touched={touched} setErros={setFieldError} setTouched={setFieldTouched}/>

            {values.ufComarcaNascimento !== '' && <FiliacaoAluno/>}

            <FiliacaoAluno/>

            <Index/>

            <Matricula/>

          </div>
          
          <div className="flex p-10 items-center justify-center">
            <button type="submit" className="btn btn-primary w-full p-3">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

