import {Option, Selected} from "./options";
import React, {ChangeEventHandler, Dispatch} from "react";

export interface IDropdownButtonProps {
    option: Selected,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[]
}

export interface IOptionsItemProps {
    option: Option,
    isIcon: boolean,
    isMulti: boolean,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setSearchValue: Dispatch<React.SetStateAction<string>>,
    isVisible: boolean,
    setIsVisible: Dispatch<React.SetStateAction<boolean>>,
}

export interface IDropdownCheckboxProps {
    isSelected: boolean,
    selectOption: ChangeEventHandler<HTMLInputElement>
}

export interface IDropdownProps {
    options: Option[],
    multi: boolean,
    icon: boolean
}

export interface IDropdownContentProps {
    optionsList: Option[],
    setOptionsList: Dispatch<React.SetStateAction<Option[]>>,
    isIcon: boolean,
    isMulti: boolean,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setSearchValue: Dispatch<React.SetStateAction<string>>,
    searchValue: string,
    isVisible: boolean,
    setIsVisible: Dispatch<React.SetStateAction<boolean>>,
}

export interface IDropdownSelect {
    isMulti: boolean,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    isVisible: boolean,
}

export interface IDropdownSelectedValueProps {
    isMulti: boolean,
    option: Selected,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[]
}

export interface IOptionListProps {
    optionsList: Option[],
    isIcon: boolean,
    isMulti: boolean,
    setSelectedOptions: Dispatch<React.SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setSearchValue: Dispatch<React.SetStateAction<string>>,
    isVisible: boolean,
    setIsVisible: Dispatch<React.SetStateAction<boolean>>,
}