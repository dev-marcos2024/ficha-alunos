import { Field,ErrorMessage } from 'formik';


interface Props {
    nome: string;
}

export const AlunosSexo = ({nome}: Props) => {
    return (
        <fieldset className="flex flex-column">
            <legend>Sexo</legend>

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <Field value= "feminino" type="radio" className="btn-check is-valid" name={nome} id="sexoRadio1" autoComplete="off"/>
                <label className="btn btn-outline-secondary" htmlFor="sexoRadio1">Feminino</label>

                <Field value= "masculino" type="radio" className="btn-check is-invalid" name={nome} id="sexoRadio2" autoComplete="off"/>
                <label className="btn btn-outline-secondary" htmlFor="sexoRadio2">Masculino</label>
            </div>
            <ErrorMessage name={nome} component="div" className="text-red-600" />
        </fieldset>
    );
};