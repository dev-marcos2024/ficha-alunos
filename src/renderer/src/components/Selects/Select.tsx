import { ErrorMessage, Field } from "formik"


interface Props{
    name: string,
    errors: string | undefined,
    touched: boolean | undefined,
    valueDisabled: string,
    optionList: string[] | undefined,
}


export const Select = ({name, touched, errors, valueDisabled, optionList}: Props)=>{

    return (
        <div className="h-[100%]">
            <Field
              as="select"
              name={name}
              id={`${name}Id`}
              className={`form-select form-select-lg h-[100%]  ${touched && errors ? "is-invalid" : ""} ${touched && !errors ? "is-valid" : ""}`}
              aria-describedby={`${name}Feedback`}
              required
            >
              <option value="" disabled>{valueDisabled}</option>
              {optionList && optionList.map((item, index)=> (
                <option key={index} value={item}>{item}</option>
              ))}
            </Field>
            <ErrorMessage name="state" component="div" id={`${name}Feedback`} className="invalid-feedback" />
          </div>
    )
} 