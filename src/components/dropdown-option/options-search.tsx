import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from "./options.module.css";
import {Option} from "../../core/types/options";
import {options} from "../../core/utils/options";

interface IOptionsSearchProps {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    setOptionsList: Dispatch<SetStateAction<Option[]>>,
    optionsList: Option[]
}

const OptionsSearch: FC<IOptionsSearchProps> = ({setSearchValue, searchValue, setOptionsList, optionsList}) => {
    const filteredOptions = (searchValue: string, options: Option[]) => {
        if (!searchValue) return options;
        return optionsList.filter(({name}) =>
            name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    useEffect(() => {
        setOptionsList(filteredOptions(searchValue, options));
    }, [searchValue]);

    return (
        <div className={styles['dropdown-option-input']}>
            <input className={styles['dropdown-option-search']}
                   value={searchValue}
                   onChange={e => setSearchValue(e.target.value)}
                   type="search"
                   placeholder={'Поиск'}/>
        </div>
    );
};

export default OptionsSearch;