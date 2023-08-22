import styles from './Price.module.scss';
import {ToolTip} from '../Tooltip/Tooltip';
import cs from "classnames";

export const Price = ({size = 'small', actual, old, discountPercent}) => {
    const defaultStyles = cs(
        styles.price,
        styles[`${size}`],
        // styles[`button_${variant}`],
    );

    return (
        <div className={defaultStyles}>
            <div className={styles.price_old}>{old}</div>
            <div className={styles.price_value}>
                <span>{actual}</span>
                <div className={styles.price_discount}>
                    <ToolTip text={'Promotional offer'}>
                        <div className={styles.price_discount_value}>-{discountPercent}%</div>
                    </ToolTip>
                </div>
            </div>
        </div>
    );
};
