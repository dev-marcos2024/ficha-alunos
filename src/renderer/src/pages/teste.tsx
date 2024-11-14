


export const Teste = ()=>{
    
    const matricula = {nome: 'Jose Roberto', ra: '123456789', dig: 'X'}

  async  function handleTeste(){
        const isExist = await window.api.selectByRa(matricula.ra);
        console.log(isExist)
        if (isExist.length = 0){
            const result = await window.api.criarNovoRm(matricula);
            console.log(result)
        }else{
            console.log('Aluno cadastrado no RM: ', isExist)
        }
        console.log(isExist)
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