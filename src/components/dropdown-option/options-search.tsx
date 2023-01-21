import React, {FC, useContext, useEffect} from 'react';
import styles from "./options.module.css";
import {Option} from "../../core/types/options";
import {options} from "../../core/utils/options";
import {DropdownContext} from "../../core/utils/dropdown-context";

const OptionsSearch: FC = () => {
    const {optionsList, setOptionsList, searchValue, setSearchValue} = useContext(DropdownContext);

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