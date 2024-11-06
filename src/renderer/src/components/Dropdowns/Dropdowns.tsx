import { useEffect, useState } from "react";
import style from './style.module.css';
import { normalizeString } from "../../utils/ExpRegular";

interface Props {
    nome: string;
    list: string[] | undefined;
    texto: string;
}

export const DropdownsSearch = ({ nome, list, texto }: Props) => {
    const [listFilter, setListFilter] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [valueSelect, setValueSelectn] = useState('');
    const [initialText, setinItialText] = useState(texto);
    const [valor , setValor] = useState('');

    useEffect(() => {
        if (list) {
            setListFilter(list);
        }
    }, [list]);

    const handleFilter = (v: string) => {
        setValor(v)
        if (list) {
            setListFilter(
              v ? list.filter(item => normalizeString(item).includes(normalizeString(v.trim())))
                : list
            );
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (item: string) => {
        setValueSelectn(item);
        setIsOpen(false);
        setinItialText(item);
    }

    return (
      <div className="dropdown position-relative">
        <button
          className="btn btn-primary dropdown-toggle min-w-20"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
        >
          {initialText}
        </button>
        <ul
          className={`dropdown-menu ${isOpen ? 'show' : ''} ${style.ul}`}
          aria-labelledby="dropdownMenuButton1"
        >
          <li className="list-group-item px-3">
            <input
              type="search"
              value={valor}
              className="form-control"
              placeholder="Pesquisar..."
              onChange={(e) => handleFilter(e.target.value)}
            />
          </li>
          {listFilter.length > 0 ? (
            listFilter.map((uf: string, i: number) => (
              <li key={i} className={`dropdown-item ${style.item}`} onClick={() => handleSelectItem(uf)}>
                {uf}
              </li>
            ))
          ) : (
            <li className="dropdown-item text-muted">Nenhum item encontrado</li>
          )}
          <li>FIM</li>
        </ul>
      </div>
    )
};

