import React, {FC, useState} from "react";
import styles from "./styles/index.module.css";
import Dropdown from "./components/dropdown";
import {Option} from "./core/types/options";
import { DropdownContext } from "./core/utils/dropdown-context";
import {initialOptions} from "./core/config/options";

const App: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [optionsList, setOptionsList] = useState<Option[]>(initialOptions.options);
    const [searchValue, setSearchValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState(initialOptions.selected);

    return (
        <DropdownContext.Provider value={{
            selectedOptions,
            setSelectedOptions,
            optionsList,
            setOptionsList,
            searchValue,
            setSearchValue,
            isVisible,
            setIsVisible
        }}>
        <div className={styles.container + ' ' + styles.wrapper}>
            <div className={styles.inner}>
                <Dropdown/>
            </div>
        </div>
        </DropdownContext.Provider>
    )
}

export default App;
