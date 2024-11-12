import { ErrorMessage, useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { InputMaskDefalt } from '../Inputs/InputsMask/InputMaskDefalt'


export const CertidaoNova = () => {

  const {errors, touched, values} = useFormikContext<TypeForm>();

  return (
    <>
      <InputMaskDefalt
        nome="certidaoNova"
        Texto='Certidão Nova (Matrícula)'
        mask='999999.99.99.9999.9.99999.999.9999999.99'
        pHolder="999999.99.99.9999.9.99999.999.9999999.99"
        valor= {values.certidaoNova}
        touched={touched.certidaoNova}
        errors={errors.certidaoNova}
      />
      <ErrorMessage name="certidaoNova" component="div" className="error" />
    </>
  )
}