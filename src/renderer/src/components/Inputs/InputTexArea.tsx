import { ErrorMessage, Field } from 'formik'


interface Props{
    texto: string 
    name: string,
    touched:  boolean | undefined,
    errors: string | undefined
}

export const InputTextArea = ({name, texto,touched, errors}: Props)=>{


    return(
        <div className="form-floating">
            <Field
                as="textarea" 
                className= {`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''} `}
                name={name} id={name}
            />
            <label htmlFor={name}>{texto}</label>
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    )
}