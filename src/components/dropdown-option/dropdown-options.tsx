import React, {FC, useContext} from 'react';
import styles from "./options.module.css";
import OptionsList from "./options-list";
import OptionsSearch from "./options-search";
import {DropdownContext} from "../../core/utils/dropdown-context";

const DropdownOptions: FC = () => {
    const {isVisible} = useContext(DropdownContext);

    return (
        <div className={`${styles['dropdown-option']} ${isVisible ? styles['dropdown-option--visible'] : ''}`}
             onClick={e => e.stopPropagation()}
        >
            <OptionsSearch/>
            <OptionsList/>
        </div>
    );
};

export default DropdownOptions;