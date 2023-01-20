export interface Option {
    icon: string,
    name: string,
    id: string
}

export interface Selected {
    name: string,
    id: string
}

export interface OptionState {
    options: Option[],
    selected: Selected[],
    multi: boolean,
    isIcon: boolean
}
