import { InputMaskDefalt } from '../Inputs/InputsMask/InputMaskDefalt'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputText } from '../Inputs/InputText'
import { useEndereco } from '../../utils/tanstack-query/queries'



export const PrimeiraLinha = ()=>{
  const {touched,errors,values} = useFormikContext<TypeForm>();
  const cep = values.cep
  const endereco = useEndereco(cep).data

  endereco && (values.rua = endereco.logradouro)


  return (
    <div className="flex gap-6">
      <div className="flex max-w-48">
        <InputMaskDefalt
          nome='cep' touched={touched.cep} errors={errors.cep} valor={values.cep}
          mask={'99999-999'} pHolder={'00000-000'} Texto={'Digite o Cep'}
        />
      </div>

      <InputText nome={'rua'} errors={errors.rua} touched={touched.rua} placeholder='Rua/Avenida'
                 texto='Endereço (Rua/Avenida)' tipo='text'
      />
    </div>
  )
}



















