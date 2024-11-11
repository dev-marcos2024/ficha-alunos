import { ErrorMessage, useFormikContext } from 'formik'
import { InputMask} from "primereact/inputmask";
import { TypeForm } from "../../../models/SchemaForm";


interface Props{
    nome: string, 
    touched:  boolean | undefined,
    errors: string | undefined,
    valor: string
}

export const InputCpfMask = ({nome,touched, errors, valor}: Props) => {
    const {setFieldValue, setFieldTouched} = useFormikContext<TypeForm>();

    const handleSetValue = (val: string) =>{
        if(val.trim() === '') return

        setFieldValue(nome, val)
        setFieldTouched(nome, true)
    }

    return (
        <div className="form-floating">
            <InputMask 
                id={nome}
                name={nome}
                className={`form-control ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`}
                value={valor}
                onFocus={() => setFieldTouched(nome, true)} 
                onChange={(e) => handleSetValue(e.value ?? '') } 
                mask="999.999.999-99" placeholder="999.999.999-99"
            />
            <label htmlFor={nome}>Digite o CPF</label>
            <ErrorMessage name={nome} component="div" className="error" />
        </div>       
    )
}