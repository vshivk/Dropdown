import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import styles from "./options.module.css";
import OptionsItem from "./options-item";
import {Option, Selected} from "../../core/types/options";
import {DropdownContext} from "../../core/utils/dropdown-context";

const OptionsList: FC = () => {
    const {optionsList} = useContext(DropdownContext);
    return (
        <ul className={styles['dropdown-option-list']}>
            {optionsList.map(option =>
                <OptionsItem
                    key={option.id}
                    option={option}
                />
            )}
        </ul>
    );
};

export default OptionsList;