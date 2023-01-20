import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./options.module.css";
import {Option, Selected} from "../../core/types/options";
import {initialOptions} from "../../core/utils/options";

interface IOptionsItemProps {
    option: Option,
    setSelectedOptions: Dispatch<SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setIsVisible: Dispatch<SetStateAction<boolean>>,
    isVisible: boolean
}

const OptionsItem: FC<IOptionsItemProps> = ({option, setSelectedOptions, selectedOptions, setIsVisible, isVisible}) => {
    const {icon, name, id} = option;
    const isSelected = selectedOptions.find(option => option.id === id);

    const selectOption = () => {
        if (initialOptions.multi) {
            setSelectedOptions([...selectedOptions, {name: name, id: id}]);
            setIsVisible(!isVisible);
            selectedOptions.forEach(option => {
                if (option.id === id) {
                    setSelectedOptions(selectedOptions.filter(option => option.id !== id));
                }
            })
        } else {
            setSelectedOptions([{name: name, id: id}]);
            setIsVisible(!isVisible);
        }
    }

    return (
        <li className={`${styles['dropdown-option-item']} ${!initialOptions.multi && isSelected ? styles['dropdown-option-item--active'] : ''}`}
            onClick={selectOption}
        >
            <div className={styles['dropdown-option-language']}>
                {initialOptions.isIcon && <img src={icon} alt="russia"/>}
                {initialOptions.multi
                    &&
                    <input className={styles['dropdown-option-checkbox']}
                           type="checkbox"
                           onChange={selectOption}
                           checked={Boolean(isSelected)}
                           id={name}
                    />
                }
                <label className={styles['dropdown-option-span']} htmlFor={name}>{name}</label>
            </div>


        </li>
    );
};

export default OptionsItem;