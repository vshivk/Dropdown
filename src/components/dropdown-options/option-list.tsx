import React, {FC} from "react";
import styles from "./style.module.css";
import OptionItem from "./option-item";
import {IOptionListProps} from "../../core/types/props";

const OptionList: FC<IOptionListProps> = ({optionsList,isIcon,isMulti,selectedOptions,setSelectedOptions,setSearchValue,isVisible,setIsVisible}) => {
    return (
        <div className={styles['dropdown-options-inner']}>
            <ul className={styles['dropdown-options-list']}>
                {optionsList.map(option =>
                    <OptionItem
                        key={option.id}
                        option={option}
                        isIcon={isIcon}
                        isMulti={isMulti}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                        setSearchValue={setSearchValue}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                )}
            </ul>
        </div>

    );
};

export default OptionList;