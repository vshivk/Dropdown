import React, {FC, useContext} from "react";
import styles from "./style.module.css";
import OptionList from "./option-list";
import OptionSearch from "./option-search";
import {DropdownContext} from "../../core/utils/dropdown-context";

//This component renders the options section of the dropdown menu
const Options: FC = () => {
    const {isVisible} = useContext(DropdownContext);
    const optionsClassName = `${styles['dropdown-options']} ${isVisible ? styles['dropdown-options--visible'] : ''}`;

    return (
        <div className={optionsClassName}
             onClick={e => e.stopPropagation()}
        >
            <OptionSearch/>
            <OptionList/>
        </div>
    );
};

export default Options;