import React, {FC, useContext, useEffect} from 'react';
import styles from "./style.module.css";
import {Option} from "../../core/types/options";
import {options} from "../../core/utils/initial-options";
import {DropdownContext} from "../../core/utils/dropdown-context";

const OptionSearch: FC = () => {
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
        <div className={styles['dropdown-options-input']}>
            <input className={styles['dropdown-options-search']}
                   value={searchValue}
                   onChange={e => setSearchValue(e.target.value)}
                   type="search"
                   placeholder={'Поиск'}/>
        </div>
    );
};

export default OptionSearch;