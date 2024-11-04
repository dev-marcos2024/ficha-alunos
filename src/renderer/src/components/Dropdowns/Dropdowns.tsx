import { useEffect, useState } from "react"
import style from './style.module.css'
import { UseQueryResult } from "@tanstack/react-query";
import { normalizeString} from "../../utils/ExpRegular";

interface Props{
    nome: string
    list: UseQueryResult<string[], Error>
}

export const DropdownsSearch = ({nome, list}:Props)=>{
    const [listFilter, setListFilter] = useState<string[]>([]);

    useEffect(() => {
        if (!list.data) return
            setListFilter(list.data);
    }, [list.data]);

    const handleFilter = (v: string) => {
            if(!list.data) return
            if (v !== '') {
                setListFilter(
                    list.data.filter(item => normalizeString(item) .includes(normalizeString(v.trim())))
                );
            } else {
                setListFilter(list.data);
            }
    };

    
    return (

        <div className="dropdown position-relative">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             {nome}
        </button>
        <ul className={`dropdown-menu ${style.ul}`}>
            <li className="list-group-item px-3 ">
                <input 
                    type="search" 
                    className="form-control" 
                    placeholder="Pesquisar..."
                    onChange={e => handleFilter(e.target.value)}
                />
            </li>
            {listFilter && listFilter.map((uf: string, i:number) => 
                <li key={i} className="dropdown-item">{uf}</li>
            )}
        </ul>
        </div>

    )
}