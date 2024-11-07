import { useFormikContext } from "formik";
import { InputMask} from "primereact/inputmask";
import { TypeForm } from "../../../models/SchemaForm";


interface Props{
    nome: string, 
    touched:  boolean | undefined,
    errors: string | undefined,
    valor: string
}

export const InputTelefoneMask = ({nome,touched, errors, valor}: Props) => {
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
                mask="(99) 99999-9999" placeholder="(99) 99999-9999"
            />
            <label htmlFor={nome}>Digite o Telefone</label>
        </div>       
    )
}