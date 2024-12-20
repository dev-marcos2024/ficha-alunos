import { Field,ErrorMessage } from 'formik';


interface Props {
    nome: string;
}

export const AlunosSexo = ({nome}: Props) => {
    return (
        <fieldset className="flex flex-column">
            <legend className='legendAxiliar'>Sexo</legend>

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <Field value= "feminino" type="radio" className="btn-check is-valid" name={nome} id="sexoRadio1" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="sexoRadio1">Feminino</label>

                <Field value= "masculino" type="radio" className="btn-check is-invalid" name={nome} id="sexoRadio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="sexoRadio2">Masculino</label>
            </div>
            <ErrorMessage name={nome} component="div" className="error" />
        </fieldset>
    );
};