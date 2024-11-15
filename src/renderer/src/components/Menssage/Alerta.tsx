import stype from './style.module.css'
import { useMenssage } from '../../contexts/ContextMenssage'


export const Menssage = ()=>{

  const c = useMenssage();

  return (
    <div className={`${stype.alerta} ${c?.display && 'hidden'}`}>
      <div
        className={`flex h-[200px] p-4
        justify-content-around ${c?.color} items-center text-4xl`}
      >
        {c?.msg}
        <button
          type="button"
          className="btn btn-primary self-end"
          onClick={() => c?.handleMenssage()}
        >Sair</button>
      </div>
    </div>
  )
}