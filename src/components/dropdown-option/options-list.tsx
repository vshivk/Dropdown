import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./options.module.css";
import OptionsItem from "./options-item";
import {Option, Selected} from "../../core/types/options";

interface IOptionsListProps {
    optionsList: Option[],
    setSelectedOptions: Dispatch<SetStateAction<Selected[]>>,
    selectedOptions: Selected[],
    setIsVisible: Dispatch<SetStateAction<boolean>>,
    isVisible: boolean
}

const OptionsList: FC<IOptionsListProps> = ({
                                                optionsList,
                                                setSelectedOptions,
                                                selectedOptions,
                                                setIsVisible,
                                                isVisible
                                            }) => {
    return (
        <ul className={styles['dropdown-option-list']}>
            {optionsList.map(option =>
                <OptionsItem
                    key={option.id}
                    option={option}
                    setSelectedOptions={setSelectedOptions}
                    selectedOptions={selectedOptions}
                    setIsVisible={setIsVisible}
                    isVisible={isVisible}
                />
            )}
        </ul>
    );
};

export default OptionsList;