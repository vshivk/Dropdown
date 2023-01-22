import React, {FC} from "react";
import styles from "./style.module.css";
import {IDropdownButtonProps} from "../../core/types/props";

const DropdownButton: FC<IDropdownButtonProps> = ({option, setSelectedOptions, selectedOptions}) => {
    const {id} = option;
    const deleteFromSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedOptions(selectedOptions.filter(option => option.id !== id));
    }

    return (
        <button className={styles['dropdown-selected-value-remove']} onClick={e => deleteFromSelected(e)}></button>
    );
};

export default DropdownButton;