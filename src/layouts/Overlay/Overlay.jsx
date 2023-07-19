import {useState} from "react";
import styles from './Overlay.module.scss'

export const Overlay = ({children}) => {
    let [isShow, setIsShow] = useState(false);
    const mouseOver = () => {
        console.log("Hover");
        setIsShow(true);
    }

    const mouseLeave = () => {
        console.log("Hover");
        setIsShow(false);
    }
    return <div className={`${styles.wrapper} ${isShow ? styles.wrapper_open : ''}`}>
        <div className={`${styles.modal} ${isShow ? styles.modal_open : ''}`} onMouseOver={mouseOver}
             onMouseLeave={mouseLeave}>
            {children}
        </div>

    </div>;
};