import { InputText } from "../Inputs/InputText";
import { useFormikContext } from 'formik'
import { TypeForm } from '@renderer/src/models/SchemaForm'


export const CertidaoAntiga = () => {

  const {errors, touched} = useFormikContext<TypeForm>();

  return (
    <div className="flex gap-6">
      <InputText nome="certidaoDistrito" texto="Distrito Certidão" tipo="text"
        placeholder="Digite a Certidao" touched={touched.certidaoDistrito} errors={errors.certidaoDistrito}
      />

      <InputText
        nome="certidaoFolha" texto="Folha" tipo="text"
        placeholder="Digite a Certidao" touched={touched.certidaoFolha} errors={errors.certidaoFolha}
      />

      <InputText
        nome="certidaoLivro" texto="Livro" tipo="text"
        placeholder="Digite a Certidao" touched={touched.certidaoLivro} errors={errors.certidaoLivro}
      />

      <InputText
        nome="certidaoNumero" texto="Numero" tipo="text"
        placeholder="Digite a Certidao" touched={touched.certidaoNumero} errors={errors.certidaoNumero}
      />
    </div>
  )
}