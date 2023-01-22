import React, {FC} from "react";
import styles from "./style.module.css";
import DropdownCheckbox from "../dropdown-checkbox/dropdown-checkbox";
import {IOptionsItemProps} from "../../core/types/props";
import {toggleOption} from "../../core/utils/toggle-option";

const OptionItem: FC<IOptionsItemProps> = ({option: {icon, title, id},isIcon,isMulti,setSelectedOptions,selectedOptions,setSearchValue,isVisible,setIsVisible}) => {
    const isSelected = Boolean(selectedOptions.find(option => option.id === id));
    const optionsItemClassName = `${styles['dropdown-options-item']} ${!isMulti && isSelected ? styles['dropdown-options-item--active'] : ''}`;
    const selectOption = () => {
        if (isMulti) {
            setSelectedOptions(toggleOption(selectedOptions, {title, id}));
        } else {
            setSelectedOptions([{title: title, id: id}]);
        }
        setIsVisible(!isVisible);
        setSearchValue('');
    }

    return (
        <li className={optionsItemClassName} onClick={selectOption}>
            <div className={styles['dropdown-options-language']}>
                {isIcon && <img src={icon} alt={title}/>}
                <DropdownCheckbox
                    isSelected={isSelected}
                    selectOption={selectOption}
                />
                <label>{title}</label>
            </div>
        </li>
    );
};

export default OptionItem;