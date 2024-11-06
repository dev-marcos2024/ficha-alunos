import { Field } from 'formik'
import { ReactNode } from 'react'



interface Props{
    texto: string | ReactNode
    placeholder: string | undefined,
    nome: string,
    touched:  boolean | undefined,
    errors: string | undefined
    tipo: string
}
 

export const InputText = ({texto, placeholder, nome,  touched, errors, tipo }: Props)=>{

    return (
        <div className="form-floating">
            <Field
            type={tipo}
            id={nome}
            placeholder={placeholder}
            name={nome}
            className={`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''} `}
        />
            <label htmlFor={nome}>{texto}</label>
        </div>
    )
}