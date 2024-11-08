import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputTextArea } from '../Inputs/InputTexArea';


export const TerceiraLinha = ()=>{
  const {touched,errors} = useFormikContext<TypeForm>();


  return (
    <div className="flex">
      <InputTextArea name='infoMudancaIndereco' 
        texto='Outras informações (mudança de endereço)'
        errors={errors.infoMudancaIndereco}
        touched={touched.infoMudancaIndereco}
      />
    </div>
  )
}



















