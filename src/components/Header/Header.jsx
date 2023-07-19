import styles from './Header.module.scss'
import {useState} from "react";

export const Header = () => {
    let [isShow, setIsShow] = useState(false);
    const showOverlay = () => {
        console.log("Hover");
        setIsShow(true);
    }

    const hideOverlay = () => {
        console.log("Hover out");
        setIsShow(false);
    }

    return <>
        <header className={`${styles.header} ${isShow ? styles.header_open : ''}`}>
            <div>Burger</div>
            <HeaderItem isActive showOverlay={showOverlay}>Content</HeaderItem>
            <HeaderItem isActive showOverlay={showOverlay}>Cart</HeaderItem>


        </header>
        <div onClick={hideOverlay} className={`${styles.wrapper} ${isShow ? styles.wrapper_open : ''}`}/>
    </>
};

const HeaderItem = ({isActive, showOverlay, children}) => {
    return <div onClick={showOverlay}
    >{children}
    </div>
}