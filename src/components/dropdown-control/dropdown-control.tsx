import React, {FC, useState} from 'react';
import styles from "./dropdown-control.module.css";
import DropdownOptions from "../dropdown-option/dropdown-options";
import DropdownItem from "./dropdown-item";
import {initialOptions} from "../../core/utils/options";
import {Option} from "../../core/types/options";
import { DropdownContext } from '../../core/utils/dropdown-context';

const DropdownControl: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [optionsList, setOptionsList] = useState<Option[]>(initialOptions.options);
    const [searchValue, setSearchValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState(initialOptions.selected);

    const clickOutDropdown = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsVisible(false);
        }
    }

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
            <div className={styles.dropdown}
                 onClick={() => setIsVisible(!isVisible)}
                 onBlur={e => clickOutDropdown(e)}
                 tabIndex={0}
            >
                <DropdownItem/>
                <div>
                    <div
                        className={`${styles['dropdown-indicator']} ${isVisible ? styles['dropdown-indicator--rotate'] : ''}`}></div>
                </div>
                <DropdownOptions/>
            </div>
        </DropdownContext.Provider>

    );
};

export default DropdownControl;