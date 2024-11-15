import { ErrorMessage, Field, useFormikContext } from 'formik'
import React, { ChangeEvent, Dispatch, useState } from 'react'
import styles from './select.module.css'


interface Props{
    name: string,
    errors: string | undefined,
    touched: boolean | undefined,
    optionList: string[] | undefined,
  placeholder: string
}


export const SelectInput = ({name, touched, errors,optionList, placeholder}: Props)=>{
    const [valor, setValor] = useState('')
    const { setFieldValue, setFieldTouched} = useFormikContext();

    const handleChange = (value: string) => {
      setValor(value);
      setFieldValue(name, value);
    }

    return (
        <div className="h-[100%]">
            <div className={styles.areaComponente}>
                <Field 
                    value = {valor}
                    name = {name}
                    type="text" 
                    className={`form-control form-control-lg ${styles.input} ${touched && errors ? "is-invalid" : ""} ${touched && !errors ? "is-valid" : ""}`} 
                    id="exampleFormControlInput1" 
                    placeholder={placeholder}
                    onChange={(e:React.ChangeEvent<HTMLInputElement> )=> handleChange(e.target.value)}
                />
                <select className="form-select form-select-lg h-full" aria-label=".form-select-lg example"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        handleChange(event.target.value);
                        setFieldTouched(name, true);
                    }}
                >
                    {optionList && optionList.sort().map((item, index)=> (
                    <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    )
} 


