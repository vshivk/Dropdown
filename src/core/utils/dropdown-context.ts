import {createContext} from "react";
import {IDropdownContext} from "../types/dropdown-context";

export const DropdownContext = createContext<IDropdownContext>({
    selectedOptions: [],
    setSelectedOptions: () => {
    },
    optionsList: [],
    setOptionsList: () => {
    },
    searchValue: '',
    setSearchValue: () => {
    },
    isVisible: false,
    setIsVisible: () => {
    }
});