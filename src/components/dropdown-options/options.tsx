import React, {FC} from "react";
import styles from "./style.module.css";
import OptionList from "./option-list";
import OptionSearch from "./option-search";
import {IDropdownContentProps} from "../../core/types/props";

//This component renders the options section of the dropdown menu
const Options: FC<IDropdownContentProps> = ({optionsList,setOptionsList,isIcon,isMulti,setSelectedOptions,selectedOptions,setSearchValue,searchValue,isVisible,setIsVisible}) => {
    const optionsClassName = `${styles['dropdown-options']} ${isVisible ? styles['dropdown-options--visible'] : ''}`;

    return (
        <div className={optionsClassName}
             onClick={e => e.stopPropagation()}
        >
            <OptionSearch
                optionsList={optionsList}
                setOptionsList={setOptionsList}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <OptionList
                optionsList={optionsList}
                isIcon={isIcon}
                isMulti={isMulti}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                setSearchValue={setSearchValue}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
        </div>
    );
};

export default Options;