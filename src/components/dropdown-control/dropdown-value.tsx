import React, {FC,  useContext} from 'react';
import styles from "./dropdown-control.module.css";
import {Selected} from "../../core/types/options";
import {initialOptions} from "../../core/utils/options";
import {DropdownContext} from "../../core/utils/dropdown-context";

interface IDropdownValueProps {
    option: Selected,
}

const DropdownValue: FC<IDropdownValueProps> = ({option}) => {
    const {selectedOptions, setSelectedOptions} = useContext(DropdownContext);
    const {name, id} = option;
    const deleteFromSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        selectedOptions.forEach(option => {
            if (option.id === id) {
                setSelectedOptions(selectedOptions.filter(option => option.id !== id));
            }
        })
    }

    return (
        <div
            className={`${styles['dropdown-value']} ${!initialOptions.multi ? styles['dropdown-value--default'] : ''}`}>
            <p className={styles['dropdown-value-text']}>{name}</p>
            <button className={styles['dropdown-value-remove']} onClick={e => deleteFromSelected(e)}></button>
        </div>
    );
};

export default DropdownValue;