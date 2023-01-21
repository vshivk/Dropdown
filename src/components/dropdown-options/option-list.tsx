import React, {FC, useContext} from 'react';
import styles from "./style.module.css";
import OptionItem from "./option-item";
import {DropdownContext} from "../../core/utils/dropdown-context";

const OptionList: FC = () => {
    const {optionsList} = useContext(DropdownContext);
    return (
        <ul className={styles['dropdown-options-list']}>
            {optionsList.map(option =>
                <OptionItem
                    key={option.id}
                    option={option}
                />
            )}
        </ul>
    );
};

export default OptionList;