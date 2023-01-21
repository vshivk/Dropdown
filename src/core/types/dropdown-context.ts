import {Option, Selected} from "./options";
import {Dispatch, SetStateAction} from "react";

export interface IDropdownContext {
    selectedOptions: Selected[],
    setSelectedOptions: Dispatch<SetStateAction<Selected[]>>,
    optionsList: Option[],
    setOptionsList: Dispatch<SetStateAction<Option[]>>,
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    isVisible: boolean,
    setIsVisible: Dispatch<SetStateAction<boolean>>
}
