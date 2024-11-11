import {useEffect, useState } from 'react'
import style from './style.module.css';
import { normalizeString } from "../../utils/ExpRegular";
import { ErrorMessage, Field,useFormikContext } from 'formik'
import { useCidades} from "../../utils/tanstack-query/queries"

interface Props {
    nome: string;
    texto: string;
    touched: boolean | undefined;
    errors: string | undefined;
    setTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    setErros: (field: string, message?: string) => void;
    uf: string
}

export const SelectSearch = ({ nome,  texto, touched, errors, setTouched, setErros, uf}: Props) => {
    const [listFilter, setListFilter] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [valor, setValor] = useState('');
    const list = useCidades(uf).data


    const { setFieldValue, } = useFormikContext();

    useEffect(() => {
        if (list) {
            setListFilter(list);
        }
    }, [list]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = (v: string) => {
        setValor(v);
        setFieldValue(nome, v); // Atualiza o valor do campo no Formik
        if (v !== '') setIsOpen(true);
        if (list) {
            setListFilter(
                v ? list.filter(item => normalizeString(item).includes(normalizeString(v.trim())))
                  : list
            );
        }
    };

    const handleSelect = (item: string) => {
        if(item === '') return

        setTouched(nome, true);
        setErros(nome, 'O campo deve conter mais de 2 caracteres');
        setValor(item);
        setFieldValue(nome, item); // Atualiza o valor selecionado no Formik
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
            <ErrorMessage name={nome} component="div" className="error" />
        </div>

        {isOpen && (
          <ul className={style.dropdownList}>
            {listFilter.length > 0 ? (
              listFilter.sort().map((item, i) => (
                <li key={i} className={style.dropdownItem} onClick={() => handleSelect(item)}>
                  {item}
                </li>
              ))
            ) : (
              <li className={`${style.dropdownItem} text-red-700 font-bold`}>Selecione Primeiro o Estado</li>
            )}
          </ul>
        )}
      </div>
    )
};


