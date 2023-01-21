import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import styles from "./options.module.css";
import {Option, Selected} from "../../core/types/options";
import {initialOptions} from "../../core/utils/options";
import {DropdownContext} from "../../core/utils/dropdown-context";

interface IOptionsItemProps {
    option: Option,
}

const OptionsItem: FC<IOptionsItemProps> = ({option}) => {
    const {setSelectedOptions, setIsVisible, isVisible, selectedOptions} = useContext(DropdownContext);
    const {icon, name, id} = option;
    const isSelected = selectedOptions.find(option => option.id === id);

    const selectOption = () => {
        if (initialOptions.multi) {
            const index = selectedOptions.findIndex(option => option.id === id);
            if (index === -1) {
                setSelectedOptions([...selectedOptions, {name: name, id: id}]);
            } else {
                setSelectedOptions(selectedOptions.filter(option => option.id !== id));
            }
        } else {
            setSelectedOptions([{name: name, id: id}]);
        }
        setIsVisible(!isVisible);
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
                        />
                    }
                    <label className={styles['dropdown-option-label']}>{name}</label>
            </div>
        </li>
    );
};

export default OptionsItem;