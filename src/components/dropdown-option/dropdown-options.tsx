import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./options.module.css";
import OptionsList from "./options-list";
import OptionsSearch from "./options-search";
import {Option, Selected} from "../../core/types/options";

interface IDropdownOptionsProps {
    isVisible: boolean,
    setOptionsList: Dispatch<SetStateAction<Option[]>>,
    setSearchValue: Dispatch<SetStateAction<string>>,
    searchValue: string,
    optionsList: Option[],
    setSelectedOptions: Dispatch<SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

const DropdownOptions: FC<IDropdownOptionsProps> = ({
                                                        isVisible,
                                                        setOptionsList,
                                                        searchValue,
                                                        setSearchValue,
                                                        optionsList,
                                                        setSelectedOptions,
                                                        selectedOptions,
                                                        setIsVisible
                                                    }) => {
    return (
        <div className={`${styles['dropdown-option']} ${isVisible ? styles['dropdown-option--visible'] : ''}`}
             onClick={e => e.stopPropagation()}>
            <OptionsSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setOptionsList={setOptionsList}
                optionsList={optionsList}
            />
            <OptionsList
                optionsList={optionsList}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
                setIsVisible={setIsVisible}
                isVisible={isVisible}
            />
        </div>
    );
};

export default DropdownOptions;