import React, {FC} from 'react';
import styles from './styles/index.module.css';
import DropdownControl from "./components/dropdown-control/dropdown-control";

const App: FC = () => {
    return (
        <div className={styles.container + ' ' + styles.wrapper}>
            <div className={styles.inner}>
                <p>Язык</p>
                <DropdownControl/>
            </div>
        </div>
    )
}

export default App;
