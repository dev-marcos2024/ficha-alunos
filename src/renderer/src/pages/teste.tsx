


export const Teste = ()=>{

  async  function handleTeste(){
        const data = await window.api.newRm();
        console.log(data[0].newRm)
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