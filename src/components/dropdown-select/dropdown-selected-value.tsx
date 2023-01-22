import React, {FC} from 'react';
import styles from "./style.module.css";
import DropdownButton from "../dropdown-button/dropdown-button";
import {IDropdownSelectedValueProps} from "../../core/types/props";

const DropdownSelectedValue: FC<IDropdownSelectedValueProps> = ({option,isMulti,setSelectedOptions,selectedOptions}) => {
    const {title} = option;
    const selectedValueClassName = `${styles['dropdown-selected-value']} ${!isMulti ? styles['dropdown-selected-value--default'] : ''}`;

    return (
        <div
            className={selectedValueClassName}>
            <p className={styles['dropdown-selected-value-text']}>{title}</p>
            <DropdownButton
                option={option}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            />
        </div>
    );
};

export default DropdownSelectedValue;