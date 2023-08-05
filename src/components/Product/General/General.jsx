import styles from './General.module.scss';
import cs from 'classnames';
import { CardItem } from '../../CardItem/CardItem';
import { CardRow } from '../../CardRow/CardRow';
import { ColorCircles } from '../../UI/ColorCircles/ColorCircles';
import { Button } from '../../UI/Button/Button';
import { ToolTip } from '../../UI/Tooltip/Tooltip';
import { Icon } from '../../UI/Icon/Icon';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { useState } from 'react';

export const General = () => {
	const data = [
		{
			id: 1,
			colorName: 'green',
			colorValue: '#000',
			image: 'png',
			name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
			price: 69999,
			oldPrice: 75999,
			rating: 4,
			reviews: 244,
			discount: 8,
		},
		{
			id: 2,
			colorName: 'red',
			colorValue: '#FBECDD',
			image: '/iphone.png',
			name: 'Apple iPhone 14 Pro Max 512GB Purple...',
			price: 79999,
			oldPrice: 85999,
			rating: 5,
			reviews: 245,
			discount: 9,
		},
		{
			id: 3,
			colorName: 'red',
			colorValue: '#E0E4F0',
			image: '/iphone.png',
			name: 'Apple iPhone 14 Pro Max 512GB Purple...',
			price: 79999,
			oldPrice: 85999,
			rating: 5,
			reviews: 245,
			discount: 9,
		},
	];

	const [imgData, setImgData] = useState('');

	async function fetchImages() {
		const response = await fetch('http://example.com/movies.json');
		const movies = await response.json();
		console.log(movies);
	}

	return (
		<section className={styles.general}>
			<div className={styles.gallery}>
				Gallery
				<img src={imgData} alt='' />
			</div>
			<div className={styles.data}>
				<div className={cs(styles.block, styles.block_down)}>
					<ColorCircles data={data} activeItemId={1} />
					<div className={styles.memory}>
						<Button
							textSize='middle'
							variant='outlined'
							className={`${styles.memory_btn} ${styles.memory_btn_active}`}
						>
							125 GB
						</Button>
						<Button
							textSize='middle'
							variant='outlined'
							className={styles.memory_btn}
						>
							125 GB
						</Button>
						<Button
							textSize='middle'
							variant='outlined'
							className={styles.memory_btn}
						>
							125 GB
						</Button>
						<Button
							textSize='middle'
							variant='outlined'
							className={styles.memory_btn}
						>
							125 GB
						</Button>
					</div>
				</div>
				<div className={cs(styles.block, styles.block_up)}>
					<div className={styles.price}>
						<div className={styles.price_old}>75 999</div>
						<div className={styles.price_value}>
							<span>69 999</span>
							<div className={styles.price_discount}>
								<ToolTip text={'Promotional offer'}>
									<div className={styles.price_discount_value}>-8%</div>
								</ToolTip>
							</div>
						</div>
					</div>
					<div className={styles.cart}>
						<Icon type='like' />
						<Icon type='compare' />
						<Button className={styles.cart_btn} icon={<Cart />}>
							Add to Cart
						</Button>
					</div>
				</div>

				{/*Credit Block*/}
				<div className={styles.block}></div>

				{/*Delivery Block*/}
				<div className={cs(styles.block, styles.block_down)}></div>
				<div className={cs(styles.block, styles.block_up)}></div>
				<CardRow />
			</div>
		</section>
	);
};
