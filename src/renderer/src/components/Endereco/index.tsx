import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { PrimeiraLinha } from './PrimeiraLinha'
import { SegundaLinha } from './SegundaLinha'
import { TerceiraLinha } from './TerceiraLinha'


export const Index = ()=>{
  const {values} = useFormikContext<TypeForm>();

  return (
    <fieldset className="fieldset flex flex-col gap-6">
      <legend>Endereço</legend>

      <div className="flex flex-col gap-6">
        <PrimeiraLinha/>

        <SegundaLinha/>

        <TerceiraLinha/>
      </div>

    </fieldset>
  )
}