import styles from './General.module.scss';
import cs from 'classnames';
import { CardItem } from '../../CardItem/CardItem';
import { CardRow } from '../../CardRow/CardRow';
import { ColorCircles } from '../../UI/ColorCircles/ColorCircles';
import { Button } from '../../UI/Button/Button';
import { ToolTip } from '../../UI/Tooltip/Tooltip';
import { Icon } from '../../UI/Icon/Icon';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { ReactComponent as Credit } from '../../../assets/icons/credit.svg';
import src from '../../../assets/icons/mono.png';
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

	return (
		<section className={styles.general}>
			<div className={styles.gallery}>Gallery</div>
			<div className={styles.data}>
				{/*Main Block*/}
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
				<div className={cs(styles.block, styles.block_up, styles.block_gap)}>
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
						<Button className={styles.button} icon={<Cart />}>
							Add to Cart
						</Button>
					</div>
				</div>

				{/*Credit Block*/}
				<div className={cs(styles.block, styles.block_gap)}>
					<div className={styles.credit_info}>
						<span className={styles.credit_info_title}>On credit from</span>
						<span className={styles.credit_info_value}>8 499 / mon</span>
					</div>
					<div className={styles.credit_banks}>
						<div className={styles.credit_banks_item}>
							<img src={src} alt='' />
							<span>4</span>
						</div>
						<div className={styles.credit_banks_item}>
							<img src={src} alt='' />
							<span>4</span>
						</div>
						<div className={styles.credit_banks_item}>
							<img src={src} alt='' />
							<span>4</span>
						</div>
						<div className={styles.credit_banks_item}>
							<img src={src} alt='' />
							<span>4</span>
						</div>
					</div>
					<Button
						className={styles.credit_btn}
						textSize='middle'
						variant='outlined'
						icon={<Credit />}
					>
						Buy on Credit
					</Button>
				</div>

				{/*Delivery Block*/}
				<div className={cs(styles.block, styles.block_down)}>
					<div className={styles.delivery}></div>
					<Icon type='arrow-right' />
				</div>
				<div
					className={cs(styles.block, styles.block_up, styles.block_gap)}
				></div>
				{/*Payment and guarantee Block*/}
				<div className={cs(styles.block, styles.block_down)}></div>
				<div
					className={cs(styles.block, styles.block_up, styles.block_gap)}
				></div>
				<CardRow />
			</div>
		</section>
	);
};
