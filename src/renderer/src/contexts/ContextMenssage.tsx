import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

export interface DisplayType {
  display: boolean;
  color: string;
  msg: string;
  handleMenssage: (m?: string, c?: string)=> void;
}


const Contextmsg = createContext<DisplayType | null>(null)


export const ContextMenssage = ({ children }: {children: ReactNode }) => {
  const [display, setDisplay] = useState(true);
  const [color, setColor] = useState('');
  const [msg, setMsg] = useState('false');

  const handleMenssage = (msg?: string, color?: string) => {
    setDisplay(!display);
    color && setColor(color);
    msg && setMsg(msg);
  }

  return(
    <Contextmsg.Provider value={{display, color, msg, handleMenssage}}>
      {children}
    </Contextmsg.Provider>
  )

}

export const useMenssage = ()=> useContext(Contextmsg)