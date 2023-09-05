import styles from './Button.module.scss';
import cs from 'classnames';
import {useState} from 'react';

//variant: filter, contained, outlined

export const Button = ({
                           icon,
                           variant = 'contained',
                           children,
                           onClick,
                           className,
                           clickedText,
                           clickedIcon,
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
    const allowChangeIcon = isClicked && clickedIcon && isClickAllowed;

    const buttonStyles = cs(
        styles.button,
        styles[`button_${variant}`],
        {[styles['button-clicked']]: allowChangeText},
        className
    );

    return (
        <button onClick={handleClick} className={buttonStyles} {...props}>
            {allowChangeIcon ? clickedIcon : icon}
            {allowChangeText ? clickedText : children}
        </button>
    );
};