import styles from './Button.module.scss';
import cs from "classnames";

//variant: text, contained, outlined

export const Button = ({textSize = 'small', icon, variant = 'contained', children, onClick, className, ...props}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    const defaultStyles = cs(styles.button, styles[`button_${textSize}`], styles[`button_${variant}`]);

    const buttonStyles = className
        ? cs(defaultStyles, className)
        : defaultStyles;

    return <button className={buttonStyles}>{icon}{children}</button>;
};