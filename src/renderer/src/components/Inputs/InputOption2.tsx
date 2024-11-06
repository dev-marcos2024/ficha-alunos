import { Field, Formik, Form, FormikErrors, FormikTouched } from 'formik';
import { TypeForm } from '../../models/SchemaForm';

interface Props {
    texto1: string;
    texto2: string;
    texto3: string;
    nome: string;
    touched: FormikTouched<TypeForm>;
    errors: FormikErrors<TypeForm>;
}

export const InputOption2 = ({ texto1, texto2, texto3, nome, touched, errors }: Props) => {
    return (
        <div className="flex gap-2">
            <div className="btn-group p-0 w-auto" role="group" aria-label="Basic radio toggle button group">
                <Field
                    type="radio" name={nome}  value="RG" id={`id${nome}1`} autoComplete="off"
                    className="btn-check" 
                />
                <label className="btn btn-outline-primary align-content-center " htmlFor={`id${nome}1`} >
                    {texto1}
                </label>

                <Field
                    type="radio" name={nome}  value="CPF" id={`id${nome}2`}
                    autoComplete="off" className="btn-check"
                />
                <label className="btn btn-outline-primary align-content-center" htmlFor={`id${nome}2`} >
                    {texto2}
                </label>
            </div>

            <div className="form-floating p-0">
                <Field
                    type="text" name={`${nome}Input`} id={`id${nome}Input`} placeholder="Exemplo de nome"
                    className={`form-control ${touched.alunosRgCpfInput && errors.alunosRgCpfInput ? 'is-invalid' : ''} ${touched.alunosRgCpfInput && !errors.alunosRgCpfInput ? 'is-valid' : ''}`}
                />
                <label htmlFor={`id${nome}Input`} className="ms-3">
                    {texto3}
                </label>
            </div>
        </div>
    );
};
