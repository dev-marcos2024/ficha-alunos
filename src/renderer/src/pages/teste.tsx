import { useMenssage } from '../contexts/ContextMenssage'


export const Teste = ()=>{
    
    const matricula = {nome: 'Jose Roberto', ra: '123456789', dig: 'X'}
  const c = useMenssage();

  async  function handleTeste(){

  }


    return(
        <div className="flex items-center mt-16">
            <button className="p-3 border rounded-md mx-auto bg-red-950 text-white"
                onClick={handleTeste}
            >
                Testar
            </button>
        </div>
    )
}