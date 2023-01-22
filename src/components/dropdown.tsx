import React, {FC} from 'react';
import DropdownContent from "./dropdown-content";
import {initialOptions} from "../core/config/options";

const Dropdown: FC = () => {
    return (
        <>
            <p>{initialOptions.title}</p>
            <DropdownContent/>
        </>

    );
};

export default Dropdown;