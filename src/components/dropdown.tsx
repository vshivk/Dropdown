import React, {FC, useState} from 'react';
import {initialOptions, options} from "../core/utils/initial-options";
import {Option} from "../core/types/options";
import {DropdownContext} from '../core/utils/dropdown-context';
import DropdownContent from "./dropdown-content";

const Dropdown: FC = () => {
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
            <DropdownContent/>
        </DropdownContext.Provider>
    );
};

export default Dropdown;