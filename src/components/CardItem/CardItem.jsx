import styles from './CardItem.module.scss';
import src from './iphone.png';

export const CardItem = () => {
	const data = [
		{
			colorName: 'green',
			colorValue: '#333',
			image: 'png',
			name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
			price: 69999,
			oldPrice: 75999,
			rating: 4,
			reviews: 244,
			discount: 8,
		},
		{
			colorName: 'red',
			colorValue: '#666',
			image: '/iphone.png',
			name: 'Apple iPhone 14 Pro Max 512GB Purple...',
			price: 79999,
			oldPrice: 85999,
			rating: 5,
			reviews: 245,
			discount: 9,
		},
	];

	return (
		<>
			{data.map((item, index, array) => (
				<div className={styles.main}>
					<div className={styles.image_block}>
						<img src={src} alt='' />
					</div>
					<div className={styles.colors}>
						{array.map((item) => (
							<span>{item.colorName}</span>
						))}
					</div>
					<h3 className={styles.name}>{item.name}</h3>
					<div className={styles.reviews}></div>
					<p className={styles.old_price}></p>
					<div className={styles.info}>
						<span className={styles.price}>
							<span className={styles.price_old}></span>
							<span className={styles.price_discount}></span>
						</span>
						<span>image</span>
					</div>
				</div>
			))}
		</>
	);
};
