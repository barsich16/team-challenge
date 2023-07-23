import styles from './CardItem.module.scss';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import src from './iphone.png';
import cs from 'classnames';
import { useState } from 'react';
import { ToolTip } from '../UI/Tooltip/Tooltip';

export const CardItem = ({ data }) => {
	const [activeItem, setActiveItem] = useState(data[0]);

	return (
		<>
			<div className={styles.main}>
				<div className={styles.image_block}>
					<img src={src} alt='' />
				</div>
				<div className={styles.colors}>
					{data.map((item) => (
						<span
							onClick={() => setActiveItem(item)}
							className={cs(styles.color, {
								[styles.color_active]: item.id == activeItem.id,
							})}
							style={{ backgroundColor: item.colorValue }}
						></span>
					))}
				</div>
				<h3 className={styles.name}>{activeItem.name}</h3>
				<div className={styles.reviews}>
					{new Array(5).fill().map((_, index) => (
						<Star
							className={cs({
								[styles.star_disabled]: activeItem.rating <= index,
							})}
						/>
					))}
					<span className={styles.review}>
						{activeItem.reviews} review{activeItem.reviews > 1 && 's'}
					</span>
				</div>

				<div className={styles.buy}>
					<div className={styles.price}>
						<div>200990</div>
						<div className={styles.price_old}>18 999</div>
					</div>
					{/*<div className={styles.discount}>*/}
					<ToolTip text={'Promotional offer'}>
						<div>8%</div>
					</ToolTip>
					{/*</div>*/}
					<span>buy</span>
				</div>
			</div>
		</>
	);
};
