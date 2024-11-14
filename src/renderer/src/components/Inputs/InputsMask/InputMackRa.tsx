import { ErrorMessage, useFormikContext } from 'formik'
import { InputMask} from "primereact/inputmask";
import { TypeForm } from "../../../models/SchemaForm";


interface Props{
    nome: string, 
    touched:  boolean | undefined,
    errors: string | undefined,
    valor: string
}

export const InputRaMask = ({nome,touched, errors, valor}: Props) => {
    const {setFieldValue, setFieldTouched, setValues} = useFormikContext<TypeForm>();
    
    const handleSetValue = async (val: string) =>{

        setFieldTouched(nome, true)
        setFieldValue(nome, val)


        if (!errors) {
            const newValue = val.replaceAll('.', '');
            const data = await window.api.getAluno(newValue);
            const temRm = await window.api.selectByRa(newValue.slice(0,9).replaceAll('_', ''));
            const newRm = await window.api.getNewRm();

        
            if (temRm.length>0){
              setFieldValue('rm', temRm[0].rm, true)
            }else{
              setFieldValue('rm', newRm, true)
            }
            if(data) setValues(data.values);
            
        }else{
          setFieldValue('rm', '');
        }
    }

    return (
      <div>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id={nome}>RA</span>
          <InputMask
            id={nome}
            name={nome}
            className={`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`}
            value={valor}
            onFocus={() => setFieldTouched(nome, true)}
            onChange={(e) => handleSetValue(e.value?.toLocaleUpperCase() ?? '')}
            mask='999.999.999-*'
            placeholder="99.999.999-X"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
        <ErrorMessage name={nome} component="div" className="error" />
      </div>
    )
}