import { Field, useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'


interface Props{
  nome: string,
  touched:  boolean | undefined,
  errors: string | undefined
}


export const InputFile = ({nome,  touched, errors }: Props)=>{
  const {setFieldValue, setFieldTouched} = useFormikContext<TypeForm>();


  return (
    <div className="form-group">
      <Field
        type="file"
        id={nome}
        name={nome}
        onFocus={() => setFieldTouched(nome, true)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFieldValue('file',event.currentTarget.files && event.currentTarget.files[0]);
          setFieldTouched(nome, true)
        }}
        className={`form-control form-control-lg ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''} `}
      />
    </div>
  )
}

