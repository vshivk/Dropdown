import React, {FC} from "react";
import styles from "./style.module.css"

interface IDropdownTriggerProps {
    isVisible:boolean,
}
const DropdownTrigger: FC<IDropdownTriggerProps> = ({isVisible}) => {
    const triggerClassName = `${styles['dropdown-trigger']} ${isVisible ? styles['dropdown-trigger--rotate'] : ''}`;

    return (
        <div>
            <div className={triggerClassName}></div>
        </div>
    );
};

export default DropdownTrigger;