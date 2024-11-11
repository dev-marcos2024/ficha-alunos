import { Field,ErrorMessage } from 'formik';


interface Props {
    nome: string;
}

export const RadioRaca = ({nome}: Props) => {
    return (
        <fieldset className="flex flex-column">
            <legend className='legendAxiliar'>Raca/COR</legend>

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <Field value= "branca" type="radio" className="btn-check is-valid" name={nome} id="racaRadio1" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="racaRadio1">BRANCA</label>

                <Field value= "preta" type="radio" className="btn-check is-invalid" name={nome} id="racaRadio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="racaRadio2">PRETA</label>

                <Field value= "parda" type="radio" className="btn-check" name={nome} id="racaRadio3" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="racaRadio3">PARDA</label>

                <Field value= "amarela" type="radio" className="btn-check" name={nome} id="racaRadio4" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="racaRadio4">AMARELA</label>

                <Field value= "indigina" type="radio" className="btn-check" name={nome} id="racaRadio5" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="racaRadio5">INÍDIGINA</label>

                <Field value= "nao declarada" type="radio" className="btn-check" name={nome} id="racaRadio6" autoComplete="off"/>
                <label className="btn btn-outline-primary is-invalid" htmlFor="racaRadio6">NAO DECLARADA</label>
            </div>
            <ErrorMessage name={nome} component="div" className="error" />
        </fieldset>
    );
};
