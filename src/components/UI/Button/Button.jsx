import styles from './Button.module.scss';
import cs from 'classnames';
import {useState} from "react";

//variant: text, contained, outlined

export const Button = ({
                           // textSize = 'small',
                           icon,
                           variant = 'contained',
                           children,
                           onClick,
                           className,
                           clickedText,
                           isClickAllowed = true,
                           ...props
                       }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev);
        if (onClick) {
            onClick();
        }
    };

    const allowChangeText = isClicked && clickedText && isClickAllowed;

    const defaultStyles = cs(
        styles.button,
        // styles[`button_${textSize}`],
        styles[`button_${variant}`],
        {[styles['button-clicked']]: allowChangeText}
    );

    const buttonStyles = className ? cs(defaultStyles, className) : defaultStyles;

    return (
        <button onClick={handleClick} className={buttonStyles} {...props}>
            {icon}
            {allowChangeText ? clickedText : children}
        </button>
    );
};
