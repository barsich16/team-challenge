import styles from './Price.module.scss';
import { ToolTip } from '../Tooltip/Tooltip';

export const Price = ({ actual, old, discountPercent }) => {
	return (
		<div className={styles.price}>
			<div className={styles.price_value}>{actual}</div>
			<div className={styles.price_old}>{old}</div>
			<div className={styles.price_discount}>
				<ToolTip text={'Promotional offer'}>
					<div className={styles.price_discount_value}>-{discountPercent}%</div>
				</ToolTip>
			</div>
		</div>
	);
};
