import { useFormContext } from '../../contexts/ContextForm'
import { AlunoInfo } from '../../../../types/SchemaForm'
import { data } from 'autoprefixer'

interface Props{
    id: string,
    texto: string
    placeholder: string,
    name: keyof AlunoInfo;
}
 

export const InputGroup = ({ id, texto, placeholder, name }: Props)=>{
    const {register, formState: { errors} } = useFormContext();


  console.log();
    return (
        <div className= 'input-group input-group-lg' >
            <span className="input-group-text" id={id}>{texto}</span>
            <input
              {...register(name)}
                type='text'
                className= {`form-control ${errors[name]? 'is-invalid' : 'is-valid'}`}
                id={id}
                placeholder={placeholder}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
            />
        </div>
    )
}
