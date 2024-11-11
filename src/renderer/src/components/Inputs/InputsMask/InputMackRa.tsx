import { ErrorMessage, useFormikContext } from 'formik'
import { InputMask} from "primereact/inputmask";
import { TypeForm } from "../../../models/SchemaForm";
import { useEffect, useState } from 'react'


interface Props{
    nome: string, 
    touched:  boolean | undefined,
    errors: string | undefined,
    valor: string
}

export const InputRaMask = ({nome,touched, errors, valor}: Props) => {
    const {setFieldValue, setFieldTouched} = useFormikContext<TypeForm>();

    const handleSetValue = (val: string) =>{
        setFieldValue(nome, val)
        setFieldTouched(nome, true)
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
            onChange={(e) => handleSetValue(e.value ?? '')}
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