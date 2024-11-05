import { Formik, Form} from 'formik';
import { AlunoSchema, InitialDateForm } from '../../models/SchemaForm'
import { DadosAlunos } from './DadosAlunos'


export const Formulario = () => {
  return (
    <Formik
      initialValues={InitialDateForm}
      validationSchema={AlunoSchema}
      onSubmit={(values) => {
        console.log('Dados do aluno:', values);
      }}
    >
      {({ touched, errors }) => (

        <Form className="container mt-4">
          <div className="form-group">
            <DadosAlunos errors={errors} touched={touched}/>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

