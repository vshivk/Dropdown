import {OptionState} from "../types/options";
import {options} from "../utils/options";

export const initialOptions: OptionState = {
    title: 'Язык',
    options: options,
    selected: [],
    multi: true,
    icon: true
}
