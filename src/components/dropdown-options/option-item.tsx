import React, {FC, useContext} from 'react';
import styles from "./style.module.css";
import {DropdownContext} from "../../core/utils/dropdown-context";
import DropdownCheckbox from "../dropdown-checkbox/dropdown-checkbox";
import {IOptionsItemProps} from "../../core/types/props";
import {toggleOption} from "../../core/utils/toggle-option";
import {isIcon, isMulti} from "../../core/consts/consts";

const OptionItem: FC<IOptionsItemProps> = ({option: {icon, name, id}}) => {
    const {setSelectedOptions, setIsVisible, isVisible, selectedOptions} = useContext(DropdownContext);
    const isSelected = Boolean(selectedOptions.find(option => option.id === id));
    const optionsItemClassName = `${styles['dropdown-options-item']} ${!isMulti && isSelected ? styles['dropdown-select-options-item--active'] : ''}`;

    const selectOption = () => {
        if (isMulti) {
            setSelectedOptions(toggleOption(selectedOptions, {name, id}));
        } else {
            setSelectedOptions([{name: name, id: id}]);
        }
        setIsVisible(!isVisible);
    }

    return (
        <li className={optionsItemClassName} onClick={selectOption}>
            <div className={styles['dropdown-options-language']}>
                {isIcon && <img src={icon} alt="russia"/>}
                {isMulti
                    &&
                    <DropdownCheckbox isSelected={isSelected} selectOption={selectOption}/>
                }
                <label className={styles['dropdown-options-label']}>{name}</label>
            </div>
        </li>
    );
};

export default OptionItem;