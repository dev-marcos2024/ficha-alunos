import { InputMaskDefalt } from '../Inputs/InputsMask/InputMaskDefalt'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputText } from '../Inputs/InputText'
import { useEndereco } from '../../utils/tanstack-query/queries'



export const SegundaLinha = ()=>{
  const {touched,errors,values} = useFormikContext<TypeForm>();
  const cep = values.cep
  const endereco = useEndereco(cep).data

  if (endereco){
    values.bairro = endereco.bairro
    values.cidade = endereco.localidade
  }


  return (
    <div className="flex gap-6">
      <div className="flex max-w-32">
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

      <div className="flex gap-6">
        <div className="flex min-w-52">
        <InputMaskDefalt
            nome='telefoneFixo' touched={touched.telefoneFixo} errors={errors.telefoneFixo} valor={values.telefoneFixo}
            mask={'(99) 9999-9999'} pHolder={'(DD) 9999-9999'} Texto={'Telefone'}
          />
        </div>

        <div className="flex min-w-52">
        <InputMaskDefalt
            nome='celular' touched={touched.celular} errors={errors.celular} valor={values.celular}
            mask={'(99) 99999-9999'} pHolder={'(DD) 99999-9999'} Texto={'Celular'}
          />
        </div>
      </div>
    </div>
  )
}



















