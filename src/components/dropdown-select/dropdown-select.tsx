import React, {FC, useContext} from "react";
import styles from "./style.module.css";
import DropdownSelectedValue from "./dropdown-selected-value";
import {DropdownContext} from "../../core/utils/dropdown-context";
import DropdownTrigger from "../dropdown-trigger/dropdown-trigger";
import {isMulti} from "../../core/consts/consts";

//This component is responsible for displaying the selected options.
const DropdownSelect: FC = () => {
    const {selectedOptions} = useContext(DropdownContext);
    const selectClassName = `${styles['dropdown-selected']} ${!isMulti ? styles['dropdown-selected--default'] : ''}`;

    return (
        <>
            <div
                className={selectClassName}>
                {selectedOptions.map(option =>
                    <DropdownSelectedValue
                        key={option.id}
                        option={option}
                    />
                )}
            </div>
            <DropdownTrigger/>
        </>
    );
};

export default DropdownSelect;