import React, {FC} from 'react';
import styles from "./style.module.css";
import DropdownSelect from "./dropdown-select/dropdown-select";
import Options from "./dropdown-options/options";
import {IDropdownContentProps} from "../core/types/props";

//This component is responsible for rendering the main dropdown content
const DropdownContent: FC<IDropdownContentProps> = ({optionsList,setOptionsList,isIcon,isMulti,selectedOptions,setSelectedOptions,setSearchValue,searchValue,isVisible,setIsVisible}) => {
    const onClickOutside = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsVisible(false);
            setSearchValue('');
        }
    }
    return (
        <div className={styles.dropdown}
             onClick={() => setIsVisible(!isVisible)}
             onBlur={e => onClickOutside(e)}
             tabIndex={0}
        >
            <DropdownSelect
                isMulti={isMulti}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isVisible={isVisible}
            />
            <Options
                optionsList={optionsList}
                setOptionsList={setOptionsList}
                isIcon={isIcon}
                isMulti={isMulti}
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

export default DropdownContent;