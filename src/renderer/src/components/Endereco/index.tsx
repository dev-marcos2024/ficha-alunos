import { PrimeiraLinha } from './PrimeiraLinha'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { SegundaLinha } from '../../components/Endereco/SegundaLinha'


export const Index = ()=>{
  const {values} = useFormikContext<TypeForm>();

  return (
    <fieldset className="fieldset flex flex-col gap-6">
      <legend>Endereço</legend>

      <div className="flex flex-col gap-6">
        <PrimeiraLinha/>

        <SegundaLinha/>
      </div>

    </fieldset>
  )
}