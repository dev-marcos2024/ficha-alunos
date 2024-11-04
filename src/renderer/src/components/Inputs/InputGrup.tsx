import { strict } from "assert"
import { string } from "zod"



interface Props{
    id: string,
    texto: string
    isValido: boolean
    placeholder: string,
    col: string
}
 

export const InputGroup = ({ id, texto, isValido, placeholder, col }: Props)=>{

    return (
        <div className={`input-group input-group-lg ${col}`}>
            <span className="input-group-text" id={id}>{texto}</span>
            <input 
            type='text'
            className= {`form-control ${isValido? 'is-valid' : 'is-invalid'}`} 
            id={id}
            placeholder={placeholder}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
        />
        </div>
    )
}
