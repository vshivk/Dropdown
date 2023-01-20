import React, {FC, useEffect, useRef, useState} from 'react';
import styles from "./dropdown-control.module.css";
import DropdownOptions from "../dropdown-option/dropdown-options";
import DropdownItem from "./dropdown-item";
import {initialOptions} from "../../core/utils/options";
import {Option} from "../../core/types/options";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

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
        <div className={styles.dropdown}
             onClick={() => setIsVisible(!isVisible)}
             onBlur={e => clickOutDropdown(e)}
             tabIndex={0}
        >
            <DropdownItem
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
            <div>
                <div
                    className={`${styles['dropdown-indicator']} ${isVisible ? styles['dropdown-indicator--rotate'] : ''}`}></div>
            </div>

            <DropdownOptions
                setOptionsList={setOptionsList}
                optionsList={optionsList}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isVisible={isVisible}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
                setIsVisible={setIsVisible}
            />
        </div>
    );
};

export default DropdownControl;