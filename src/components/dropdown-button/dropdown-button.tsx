import React, {FC, useContext} from "react";
import styles from "./style.module.css";
import {DropdownContext} from "../../core/utils/dropdown-context";
import {IDropdownButtonProps} from "../../core/types/props";

const DropdownButton: FC<IDropdownButtonProps> = ({option}) => {
    const {selectedOptions, setSelectedOptions} = useContext(DropdownContext);
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