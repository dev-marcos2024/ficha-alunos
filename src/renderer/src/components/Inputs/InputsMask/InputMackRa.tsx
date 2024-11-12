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
    const {setFieldValue, setFieldTouched, setValues} = useFormikContext<TypeForm>();
    

    const handleSetValue = async (val: string) =>{
        setFieldValue(nome, val)
        setFieldTouched(nome, true)
        if (val[12] !== '_') {
            const data = await window.api.getAluno(val.replaceAll('.', ''))
            // if(data){
            //   console.log(data.values)
            //   setValues(data.values)
            // }
            console.log(data)
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