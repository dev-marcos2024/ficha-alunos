import { InputText } from "../Inputs/InputText";
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'


export const CertidaoNova = () => {

  const {errors, touched} = useFormikContext<TypeForm>();

  return (
    <>
      <InputText
        nome="certidaoNova"
        texto="Certidão Nova (Matrícula):"
        tipo="text"
        placeholder="Digite a Certidao"
        touched={touched.certidaoNova}
        errors={errors.certidaoNova}
      />
    </>
  )
}