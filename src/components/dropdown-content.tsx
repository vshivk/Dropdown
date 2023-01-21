import React, {FC, useContext} from 'react';
import styles from "./style.module.css";
import DropdownSelect from "./dropdown-select/dropdown-select";
import Options from "./dropdown-options/options";
import {DropdownContext} from "../core/utils/dropdown-context";

const DropdownContent: FC = () => {
    const {isVisible, setIsVisible} = useContext(DropdownContext);

    const onClickOutside = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsVisible(false);
        }
    }
    return (
        <div className={styles.dropdown}
             onClick={() => setIsVisible(!isVisible)}
             onBlur={e => onClickOutside(e)}
             tabIndex={0}>
            <DropdownSelect/>
            <Options/>
        </div>
    );
};

export default DropdownContent;