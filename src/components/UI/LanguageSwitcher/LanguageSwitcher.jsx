import styles from './LanguageSwitcher.module.scss'
import cs from 'classnames'
import {useState} from "react";

export const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState('en');

    const handleLanguageChange = (lang) => {
        setActiveLang(lang);
    };

    return (
        <div className={styles.languageSwitcher}>
            <button
                className={cs(styles.langButton, styles.en, {[styles.active]: activeLang === 'en'})}
                // className={`${styles.langButton} ${activeLang === 'en' ? 'active' : ''} en`}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <button
                className={cs(styles.langButton, styles.ua, {[styles.active]: activeLang === 'ua'})}
                onClick={() => handleLanguageChange('ua')}
            >
                UA
            </button>
        </div>
    );
};