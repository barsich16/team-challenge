import styles from './StarRating.module.scss';
import { ReactComponent as StarFilled } from '../../../assets/icons/star-rating-filled.svg';
import { ReactComponent as StarEmpty } from '../../../assets/icons/star-rating.svg';
import { Rating } from 'react-simple-star-rating';

export const StartRating = ({ rating = 4.4, readOnly }) => {
	return (
		<Rating
			fillIcon={<StarFilled width={24} height={24} />}
			emptyIcon={<StarFilled width={24} height={24} />}
			size={24}
			fillColor='#f6c660'
			allowFraction
			readonly
			initialValue={rating}
		/>
	);
	// const stars = Array.from({ length: 5 }).map((_, index) => {
	// 	let fillPercent = false;
	// 	// console.log(typeof rating);
	// 	if (index <= rating - 1) {
	// 		console.log('Ціла зірка');
	// 		fillPercent = 100;
	// 	} else if (index === Math.floor(rating) && rating % 1 !== 0) {
	// 		console.log('Частина зірка');
	// 		let part = (rating - Math.floor(rating)) * 100;
	// 		console.log('Дробна частина ' + part);
	// 		fillPercent = part;
	// 	} else {
	// 		console.log('Пуста зірка ');
	// 		fillPercent = 0;
	// 	}
	//
	// 	return <Star key={index} fillPercent={fillPercent} />;
	// });
	// return <div className={styles.stars}>{stars}</div>;
};
