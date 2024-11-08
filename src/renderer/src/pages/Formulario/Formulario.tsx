import { Formik, Form} from 'formik';
import { AlunoSchema, InitialDateForm } from '../../models/SchemaForm'
import { DadosAlunos } from './DadosAlunos'
import { FiliacaoAluno } from '../../components/Filiacao/Index';
import { Index } from '../../components/Endereco'
import { Matricula } from '../../components/Matricula/Matricula';
import { Link, useNavigate } from 'react-router-dom';



export const Formulario = () => {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={(values) => {
        
        // Navega para a rota "/ficha" e passa os dados como estado
        navigate('/ficha', { state: values });

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
            <Link className="btn btn-outline-danger" to='/ficha'>Ficha</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

