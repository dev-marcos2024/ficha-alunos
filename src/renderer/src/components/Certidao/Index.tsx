import { CertidaoNova } from './CertidaoNova'
import { CertidaoAntiga } from './CertidaoAntiga'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { OpcaoCertidao } from './OpcaoCertidao'


export  const Certidao = ()=>{
  const {values} = useFormikContext<TypeForm>();

  return (
    <div className="flex gap-6">
      <OpcaoCertidao/>
      {
        values.OpcaoCertidao === 'Nova' ?
        <CertidaoNova /> : <CertidaoAntiga />
      }
    </div>
  )
}