import {Option, Selected} from "./options";
import {ChangeEventHandler} from "react";

export interface IDropdownButtonProps {
    option: Selected,
}

export interface IDropdownValueProps {
    option: Selected,
}

export interface IOptionsItemProps {
    option: Option,
}

export interface IDropdownCheckboxProps {
    isSelected: boolean,
    selectOption: ChangeEventHandler<HTMLInputElement>
}