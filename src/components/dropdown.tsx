import React, {FC, useState} from 'react';
import DropdownContent from "./dropdown-content";
import {Option, Selected} from "../core/types/options";
import {IDropdownProps} from "../core/types/props";
import styles from "./style.module.css"

const Dropdown: FC<IDropdownProps> = ({options, multi, icon}) => {
    const [optionsList, setOptionsList] = useState<Option[]>(options);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<Selected[]>([]);

    return (
        <div className={styles.inner}>
            <DropdownContent
                optionsList={optionsList}
                setOptionsList={setOptionsList}
                isIcon={icon}
                isMulti={multi}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </div>
    );
};

export default Dropdown;