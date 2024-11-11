import { ErrorMessage, Field } from 'formik'


interface Props{
    id: string,
    texto: string,
    placeholder: string,
    nome: string,
    touched:  boolean | undefined,
    errors: string | undefined
}
 

export const InputGroup = ({ id, texto, placeholder, nome,  touched, errors  }: Props)=>{

    return (
      <div className="input-group input-group-lg">
        <span className="input-group-text" id={id}>
          {texto}
        </span>
        <Field
          type="text"
          id={id}
          placeholder={placeholder}
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          name={nome}
          className={`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`}
        />
          <ErrorMessage name={nome} component="div" className="error" />
      </div>
    )
}
