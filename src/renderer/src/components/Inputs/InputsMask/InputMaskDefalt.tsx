import { useFormikContext } from "formik";
import { InputMask} from "primereact/inputmask";
import { TypeForm } from "../../../models/SchemaForm";


interface Props{
    nome: string, 
    touched:  boolean | undefined,
    errors: string | undefined,
    valor: string,
    mask: string
    pHolder: string
    Texto: string
}

export const InputTelefoneMask = ({nome,touched, errors, valor, pHolder, Texto, mask}: Props) => {
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
                mask={mask} placeholder={pHolder}
            />
            <label htmlFor={nome}>{Texto}</label>
        </div>       
    )
}