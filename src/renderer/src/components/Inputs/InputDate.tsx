import { Field } from 'formik'


interface Props {
  nome: string
  text: string
  touched: boolean | undefined
  errors: string | undefined
}

export const InputDate = ({nome, text, touched, errors}: Props)=>{

  return (

    <div className="form-floating max-w-48">
      <Field type="date" id="dataInput" name={nome} placeholder="Escolha a Data"
             className= {`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`}
      />
      <label htmlFor="dataInput">{text}</label>
    </div>

  )
}