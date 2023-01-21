import React, {FC} from 'react';
import styles from './styles/index.module.css';
import Dropdown from "./components/dropdown";

const App: FC = () => {
    return (
        <div className={styles.container + ' ' + styles.wrapper}>
            <div className={styles.inner}>
                <p>Язык</p>
                <Dropdown/>
            </div>
        </div>
    )
}

export default App;
