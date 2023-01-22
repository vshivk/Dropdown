import React, {FC} from "react";
import styles from "./style.module.css";
import DropdownSelectedValue from "./dropdown-selected-value";
import DropdownTrigger from "../dropdown-trigger/dropdown-trigger";
import {IDropdownSelect} from "../../core/types/props";

//This component is responsible for displaying the selected options
const DropdownSelect: FC<IDropdownSelect> = ({isMulti, selectedOptions, setSelectedOptions, isVisible}) => {
    const selectClassName = `${styles['dropdown-selected']} ${!isMulti ? styles['dropdown-selected--default'] : ''}`;

    return (
        <>
            <div
                className={selectClassName}>
                {selectedOptions.length > 0
                    &&
                    selectedOptions.map(option =>
                        <DropdownSelectedValue
                            key={option.id}
                            option={option}
                            isMulti={isMulti}
                            selectedOptions={selectedOptions}
                            setSelectedOptions={setSelectedOptions}
                        />
                    )
                }

            </div>
            <DropdownTrigger isVisible={isVisible}/>
        </>
    );
};

export default DropdownSelect;