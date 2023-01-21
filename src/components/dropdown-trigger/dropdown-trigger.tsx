import React, {FC, useContext} from 'react';
import styles from "./style.module.css"
import {DropdownContext} from "../../core/utils/dropdown-context";

const DropdownTrigger:FC = () => {
    const {isVisible} = useContext(DropdownContext);
    const triggerClassName = `${styles['dropdown-trigger']} ${isVisible ? styles['dropdown-trigger--rotate'] : ''}`;

    return (
        <div>
            <div className={triggerClassName}></div>
        </div>
    );
};

export default DropdownTrigger;