import React, {FC} from "react";
import styles from "./styles/index.module.css";
import Dropdown from "./components/dropdown";
import {options} from "./core/utils/options";

const App: FC = () => {
    return (
        <div className={styles.container + ' ' + styles.wrapper}>
            <p>Язык</p>
            <Dropdown options={options} multi={true} icon={true}/>
        </div>
    )
}

export default App;
