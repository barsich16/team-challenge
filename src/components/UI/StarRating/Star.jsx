import styles from './StarRating.module.scss';
import { ReactComponent as StarIcon } from '../../../assets/icons/star-rating.svg';

export const Star = ({ fillPercent }) => {
	console.log(fillPercent);
	return (
		<div className={styles.star}>
			<StarIcon />
			<div className={styles.star_fill} style={{ width: `${fillPercent}%` }} />
		</div>
	);
};
