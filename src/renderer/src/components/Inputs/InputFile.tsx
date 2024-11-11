import { ErrorMessage, Field, useFormikContext } from 'formik'
import {TypeForm}    from '../../models/SchemaForm'



interface Props {
  nome: string;
  touched: boolean | undefined;
  errors: string | undefined;
  setFile: (file: File | null)=> void;
}

export const InputFile = ({ nome, touched, errors, setFile }: Props) => {

  const { setFieldTouched, values } = useFormikContext<TypeForm>();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) setFile(file);
  };

  return (
    <div className="form-group">
      <input
        type="file"
        id={nome}
        name={nome}
        onFocus={() => setFieldTouched(nome, true)}
        onChange={handleFileChange}
        className={`form-control form-control-lg ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`}
      />
      <ErrorMessage name={nome} component="div" className="error" />
    </div>
  );
};
