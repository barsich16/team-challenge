import styles from './Header.module.scss'

export const Header = () => {

    return <div>
        Header
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div>content</div>
            </div>
            <div className={styles.overlay}></div>
        </div></div>;
};