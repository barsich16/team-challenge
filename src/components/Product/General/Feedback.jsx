import styles from './General.module.scss';
import { Button } from '../../UI/Button/Button';
import { Icon } from '../../UI/Icon/Icon';
import { ReactComponent as StarFilled } from '../../../assets/icons/star-rating-filled.svg';
import { Rating } from 'react-simple-star-rating';
import React from 'react';
import { Tabs } from '../../TabContainer/TabContainer';

export const Reviews = () => {
	return <div>Reviews</div>;
};

export const Questions = () => {
	return <div>Questions</div>;
};

const feedbackTabsArray = [
	{ tabName: 'Reviews (312)', content: <Reviews /> },
	{ tabName: 'Questions (142)', content: <Questions /> },
];

export const Feedback = () => {
	const vars = [
		'Pretty',
		'Last model',
		'Excellent camera',
		'Pretty',
		'Last model',
		'Last model',
		'Excellent camera',
		'Pretty',
		'Last model',
		'Excellent camera',
		'Pretty',
		'Last model',
		'Excellent camera',
	];
	return (
		<section className={styles.feedback}>
			{/*<h1 className={styles.title}>*/}
			{/*	Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)*/}
			{/*</h1>*/}
			<div className={styles.flex_center}>
				<div className={styles.rating}>
					<span className={styles.rating_value}>4.8</span>
					<Rating
						fillIcon={<StarFilled width={24} height={24} />}
						emptyIcon={<StarFilled width={24} height={24} />}
						size={24}
						fillColor='#f6c660'
						allowFraction
						readonly
						initialValue={3.7}
					/>
				</div>
				<div className={styles.leave_review}>
					<Button
						variant='outlined'
						textSize='middle'
						// onClick={}
						className={styles.leave_review_btn}
						icon={<Icon size='small' type='help-circle' />}
					>
						Ask a question
					</Button>
					<Button
						textSize='middle'
						// onClick={}
						className={styles.leave_review_btn}
						icon={<Icon size='small' type='help-circle' />}
					>
						Leave a review
					</Button>
				</div>
			</div>
			<div className={styles.review_variants}>
				{vars.map((item) => (
					<div className={styles.review_variants_item}>{item}</div>
				))}
			</div>
			<Tabs tabsArray={feedbackTabsArray} />
		</section>
	);
};

export const ShortProductInfo = () => {};
