import { InputMaskDefalt } from '../Inputs/InputsMask/InputMaskDefalt'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputText } from '../Inputs/InputText'
import { useEndereco } from '../../utils/tanstack-query/queries'



export const SegundaLinha = ()=>{
  const {touched,errors,values} = useFormikContext<TypeForm>();
  const cep = values.cep
  const endereco = useEndereco(cep).data

  console.log(window.api.getEndereco('13212405'))

  endereco && (values.bairro = endereco.bairro)


  return (
    <div className="flex gap-6">
      <div className="flex max-w-40">
        <InputText nome={'enderecoNumero'} errors={errors.enderecoNumero} touched={touched.enderecoNumero}
                   placeholder='Numero da casa' texto='Numero' tipo='text' />
      </div>

      <div className="flex">
        <InputText nome={'bairro'} errors={errors.bairro} touched={touched.bairro}
                   placeholder='Bairro' texto='Bairro' tipo='text' />
      </div>

      <div className="flex">
        <InputText nome={'cidade'} errors={errors.cidade} touched={touched.cidade}
                   placeholder='Cidade' texto='Cidade' tipo='text' />
      </div>
    </div>
  )
}



















