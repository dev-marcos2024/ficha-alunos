import { useFormikContext } from 'formik';
import { useState } from 'react';

interface FormValues {
  [key: string]: any;
}

interface Props {
  nome: string;
  touched: boolean | undefined;
  errors: string | undefined;
}

export const InputFile = ({ nome, touched, errors }: Props) => {

  const { setFieldValue, setFieldTouched } = useFormikContext<FormValues>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      // Envia o arquivo para o backend do Electron
      const resp = await window.api.uploadFile({ path: file.path, name: file.name });
      if(resp.fileUrl) setImageUrl(resp.fileUrl)
      console.log(resp.fileUrl)
    }
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
    </div>
  );
};
