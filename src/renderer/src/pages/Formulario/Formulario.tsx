import { Formik, Form} from 'formik';
import { AlunoSchema, InitialDateForm } from '../../models/SchemaForm'
import { DadosAlunos } from './DadosAlunos'
import { FiliacaoAluno } from '../../components/Filiacao/Index';


export const Formulario = () => {
  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={(values) => {
        console.log('Dados do aluno:', values);
      }}
    >
      {({ touched, errors , setFieldTouched, setFieldError, values}) => (

        <Form className="container mt-4">
          <div className="form-group flex flex-col gap-6">

            <DadosAlunos errors={errors} touched={touched} setErros={setFieldError} setTouched={setFieldTouched}/>

            {values.ufComarcaNascimento !== '' && <FiliacaoAluno/>}

          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

