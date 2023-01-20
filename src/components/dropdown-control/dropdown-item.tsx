import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./dropdown-control.module.css";
import DropdownValue from "./dropdown-value";
import {Option, Selected} from "../../core/types/options";
import {initialOptions} from "../../core/utils/options";

interface IDropdownItemProps {
    selectedOptions: Selected[],
    setSelectedOptions: Dispatch<SetStateAction<Selected[]>>
}

const DropdownItem: FC<IDropdownItemProps> = ({selectedOptions, setSelectedOptions}) => {

    return (
        <div className={`${styles['dropdown-item']} ${!initialOptions.multi ? styles['dropdown-item--default'] : ''}`}>
            {selectedOptions.map(option =>
                <DropdownValue
                    key={option.id}
                    option={option}
                    setSelectedOptions={setSelectedOptions}
                    selectedOptions={selectedOptions}
                />
            )}
        </div>
    );
};

export default DropdownItem;