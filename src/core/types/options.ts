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
    title: string,
    options: Option[],
    selected: Selected[],
    multi: boolean,
    icon: boolean
}
