import { Field } from 'formik'
import { ReactNode } from 'react'



interface Props{
  texto: string
  nome: string,
  touched:  boolean | undefined,
  errors: string | undefined
}


export const ButtonRadio = ({texto,nome,  touched, errors}: Props)=>{

  return (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <Field
        autocomplete="off" checked
        type='radio'
        id={nome}
        name={nome}
        className={`btn-check ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''} `}
      />
      <label className="btn btn-outline-dark" htmlFor={nome}>{texto}</label>
    </div>
  )
}