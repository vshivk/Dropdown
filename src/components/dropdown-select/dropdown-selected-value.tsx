import React, {FC} from 'react';
import styles from "./style.module.css";
import DropdownButton from "../dropdown-button/dropdown-button";
import {IDropdownValueProps} from "../../core/types/props";
import {isMulti} from "../../core/consts/consts";

const DropdownSelectedValue: FC<IDropdownValueProps> = ({option}) => {
    const {name} = option;
    const selectedValueClassName = `${styles['dropdown-selected-value']} ${!isMulti ? styles['dropdown-selected-value--default'] : ''}`;

    return (
        <div
            className={selectedValueClassName}>
            <p className={styles['dropdown-selected-value-text']}>{name}</p>
            <DropdownButton option={option}/>
        </div>
    );
};

export default DropdownSelectedValue;