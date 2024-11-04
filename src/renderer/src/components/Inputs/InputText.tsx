
interface Props{
    id: string,
    texto: string
    isValido: boolean
    placeholder: string,
    tipo: string
}
 

export const InputText = ({ id, texto, isValido, placeholder, tipo }: Props)=>{

    return (
        <div className="form-floating mb-3">
            <input 
            type={tipo} 
            className= {`form-control ${isValido? 'is-valid' : 'is-invalid'}`} 
            id={id}
            placeholder={placeholder}
        />
            <label htmlFor={id}>{texto}</label>
        </div>
    )
}