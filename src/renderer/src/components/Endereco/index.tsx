import { PrimeiraLinha } from './PrimeiraLinha'
import { SegundaLinha } from './SegundaLinha'
import { TerceiraLinha } from './TerceiraLinha'


export const Index = ()=>{

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