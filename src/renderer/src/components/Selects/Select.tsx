import { ErrorMessage, Field, useFormikContext } from 'formik'
import React, {Dispatch, useState } from 'react'


interface Props{
    name: string,
    errors: string | undefined,
    touched: boolean | undefined,
    valueDisabled: string,
    optionList: string[] | undefined,
    setSelected?: Dispatch<React.SetStateAction<string>>
}


export const Select = ({name, touched, errors, valueDisabled, optionList, setSelected}: Props)=>{
    const [valor, setValor] = useState('')
    const { setFieldValue, setFieldTouched, setFieldError } = useFormikContext();

    const handleChange = (event: string) => {
      setSelected && setSelected(event);
      setValor(event);
      setFieldTouched(name, true);
      setFieldError(name, 'O campo deve conter mais de 2 caracteres');
      setFieldValue(name, event)
    }
    return (
        <div className="h-[100%]">
            <Field
              as="select"
              value={valor}
              name={name}
              id={`${name}Id`}
              className={`form-select form-select-lg h-[100%]  ${touched && errors ? "is-invalid" : ""} ${touched && !errors ? "is-valid" : ""}`}
              aria-describedby={`${name}Feedback`}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value)}
            >
              <option value="" disabled>{valueDisabled}</option>
              {optionList && optionList.sort().map((item, index)=> (
                <option key={index} value={item}>{item}</option>
              ))}
            </Field>
            <ErrorMessage name={name} component="div" className="error" />
          </div>
    )
} 