import React, {FC,useContext} from 'react';
import styles from "./dropdown-control.module.css";
import DropdownValue from "./dropdown-value";
import {initialOptions} from "../../core/utils/options";
import {DropdownContext} from "../../core/utils/dropdown-context";

const DropdownItem: FC = () => {
    const { selectedOptions} = useContext(DropdownContext);
    return (
        <div className={`${styles['dropdown-item']} ${!initialOptions.multi ? styles['dropdown-item--default'] : ''}`}>
            {selectedOptions.map(option =>
                <DropdownValue
                    key={option.id}
                    option={option}
                />
            )}
        </div>
    );
};

export default DropdownItem;