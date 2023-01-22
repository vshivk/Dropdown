import React, {Dispatch, FC, useEffect} from "react";
import styles from "./style.module.css";
import {Option} from "../../core/types/options";
import {options} from "../../core/utils/options";

interface IOptionsProps {
    optionsList: Option[],
    setOptionsList: Dispatch<React.SetStateAction<Option[]>>,
    searchValue: string,
    setSearchValue: Dispatch<React.SetStateAction<string>>,
}

const OptionSearch: FC<IOptionsProps> = ({optionsList, setOptionsList, searchValue, setSearchValue}) => {
    const filteredOptions = (searchValue: string, options: Option[]) => {
        if (!searchValue) return options;
        return optionsList.filter(({title}) =>
            title.toLowerCase().includes(searchValue.toLowerCase())
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