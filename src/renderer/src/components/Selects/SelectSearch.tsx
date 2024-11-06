import { useEffect, useState } from "react";
import style from './style.module.css';
import { normalizeString } from "../../utils/ExpRegular";
import { Field } from "formik";

interface Props {
    nome: string,
    list: string[] | undefined,
    texto: string,
    touched:  boolean | undefined,
    errors: string | undefined,
}

export const SelectSearch = ({ nome, list, texto,  touched, errors }: Props) => {
    const [listFilter, setListFilter] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        if (list) {
            setListFilter(list);
        }
    }, [list]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = (v: string) => {
      setValor(v)
      if(v !== '') setIsOpen(true);
      if (list) {
          setListFilter(
            v ? list.filter(item => normalizeString(item).includes(normalizeString(v.trim())))
              : list
          );
      }
  };

    const handleSelect = (item: string) => {
        setSelectedValue(item);
        setValor(item)
        setIsOpen(false); 
    };
    
    return (
      <div className={style.areaSearch}>
        <div className="form-floating">
          <Field 
            name={nome}
            id={`id${nome}`}
            type="text" 
            className={`form-control ${style.inputSearch} ${touched && errors ? 'is-invalid' : ''} ${touched && !errors ? 'is-valid' : ''}`} 
            placeholder="Pesquisar..."
            value={valor}
            onChange={(e: any) => handleFilter(e.currentTarget.value)}
            onClick={toggleDropdown}
            onBlur={() => setTimeout(() => setIsOpen(false), 300)}
          />
          <label htmlFor={`id${nome}`}>{texto}</label>
        </div>
        {isOpen && (
          <ul className={style.dropdownList}>
            {listFilter.length > 0 ? (
              listFilter.map((item, i) => (
                <li 
                  key={i} 
                  className={style.dropdownItem} 
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className={style.dropdownItem}>Nenhum item encontrado</li>
            )}
          </ul>
        )}
      </div>
    );
};


