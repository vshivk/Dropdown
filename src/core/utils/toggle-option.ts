import {Selected} from "../types/options";

export  const toggleOption = (selectedOptions: Selected[], option: Selected) => {
    const index = selectedOptions.findIndex(o => o.id === option.id);
    return index === -1
        ? [...selectedOptions, option]
        : selectedOptions.filter(o => o.id !== option.id);
};
