import { useEffect, useState } from "react";
import style from './style.module.css';
import { normalizeString } from "../../utils/ExpRegular";
import { Field, useField, useFormikContext } from "formik";

interface Props {
    nome: string;
    list: string[] | undefined | ((uf: string) => string[] | undefined);
    texto: string;
    touched: boolean | undefined;
    errors: string | undefined;
    setTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    setErros: (field: string, message?: string) => void;
}

export const SelectSearch = ({ nome, list, texto, touched, errors, setTouched, setErros }: Props) => {
    const [listFilter, setListFilter] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [valor, setValor] = useState('');

    const { setFieldValue } = useFormikContext();

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
        if (item.length === 2) {
            setTouched(nome, true);
            setErros(nome, 'O campo deve conter mais de 2 caracteres');
        } else {
            setTouched(nome, false);
            setErros(nome, undefined);
        }
        setSelectedValue(item);
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


