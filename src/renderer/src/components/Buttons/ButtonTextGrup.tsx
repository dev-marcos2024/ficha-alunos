import { Field } from 'formik'



interface Props{
  texto: string
  nome: string,
  touched:  boolean | undefined,
  errors: string | undefined
}


export const ButtonTextGrup = ()=>{

  return (
    <div className="input-group mb-3">
      <input className="btn btn-outline-secondary" type="radio" value='text 1'/>
      <input className="btn btn-outline-secondary" type="radio" value='text 2'/>
      <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons"/>
    </div>
  )
}