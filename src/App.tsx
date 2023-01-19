import React, {FC} from 'react';
import styles from './dropdown.module.css';
import russia from './assets/svg/russia.svg';

const App: FC = () => {
    return (
        <div className={styles.container + ' ' + styles.wrapper}>
            <div className={styles.inner}>
                <p className={styles.title}>Язык</p>
                <div className={styles.dropdown}>
                    <div className={styles['dropdown-item']}>
                        <div className={styles['dropdown-value']}>
                            <p className={styles['dropdown-value-text']}>Английский</p>
                            <button className={styles['dropdown-value-remove']}></button>
                        </div>
                        <div className={styles['dropdown-value']}>
                            <p className={styles['dropdown-value-text']}>Английский</p>
                            <button className={styles['dropdown-value-remove']}></button>
                        </div>
                    </div>
                    <div className={styles['dropdown-indicator']}></div>
                    <div className={styles['dropdown-options']}>
                        <div className={styles['dropdown-options-wrap']}>
                            <div className={styles['dropdown-options-input']}>
                                <input className={styles['dropdown-options-search']} type="search" placeholder={'Поиск'}/>
                            </div>
                            <ul className={styles['dropdown-options-list']}>
                                <li className={styles['dropdown-option-item']}>
                                    <div className={styles['dropdown-option-language']}>
                                        <img className={styles['dropdown-option-img']} src={russia} alt="russia"/>
                                        <label className={styles['dropdown-option-label']}
                                               htmlFor="russian">Русский</label>
                                    </div>
                                    <input className={styles['dropdown-option-checkbox']} type="checkbox" id="russian"/>
                                </li>
                                <li className={styles['dropdown-option-item']}>
                                    <div className={styles['dropdown-option-language']}>
                                        <img className={styles['dropdown-option-img']} src={russia} alt="russia"/>
                                        <label className={styles['dropdown-option-label']}
                                               htmlFor="russian">Русский</label>
                                    </div>
                                    <input className={styles['dropdown-option-checkbox']} type="checkbox" id="russian"/>
                                </li>
                                <li className={styles['dropdown-option-item']}>
                                    <div className={styles['dropdown-option-language']}>
                                        <img className={styles['dropdown-option-img']} src={russia} alt="russia"/>
                                        <label className={styles['dropdown-option-label']}
                                               htmlFor="russian">Русский</label>
                                    </div>
                                    <input className={styles['dropdown-option-checkbox']} type="checkbox" id="russian"/>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default App;
