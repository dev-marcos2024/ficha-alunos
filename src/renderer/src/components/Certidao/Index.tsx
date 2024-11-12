import { CertidaoNova } from './CertidaoNova'
import { CertidaoAntiga } from './CertidaoAntiga'
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { OpcaoCertidao } from './OpcaoCertidao'
import { InputDate } from '../Inputs/InputDate'


export  const Certidao = ()=>{
  const {values, touched, errors} = useFormikContext<TypeForm>();

  return (
    <div className="flex gap-6">
      <OpcaoCertidao/>
      {
        values.OpcaoCertidao === 'Nova' ?
          <div className="flex">
            <CertidaoNova />
          </div> 
        : 
          <CertidaoAntiga />
      }
      <div className="w-auto">
        <InputDate nome='emisCert' text='Data Emissão' errors={errors.emisCert} touched = {touched.emisCert} />
      </div>
    </div>
  )
}