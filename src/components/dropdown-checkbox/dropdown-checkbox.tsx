import React, {FC} from "react";
import styles from "./style.module.css";
import {IDropdownCheckboxProps} from "../../core/types/props";

const DropdownCheckbox: FC<IDropdownCheckboxProps> = ({isSelected, selectOption}) => {
    return (
        <input className={styles['dropdown-options-checkbox']}
               type="checkbox"
               onChange={selectOption}
               checked={isSelected}
        />
    );
};

export default DropdownCheckbox;