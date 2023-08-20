import styles from './Feedback.module.scss';
import { Tabs } from '../../TabContainer/TabContainer';
import React from 'react';
import { FeedbackHeader } from './components/FeedbackHeader';
import { CardRow } from '../../CardRow/CardRow';
import { FeedbackTab } from './components/FeedbackTab';

export const Feedback = ({ shortType }) => {
	const feedbackTabsArray = [
		{
			tabName: 'Reviews (312)',
			content: <FeedbackTab type='reviews' shortType={shortType} />,
		},
		{
			tabName: 'Questions (142)',
			content: <FeedbackTab type='questions' shortType={shortType} />,
		},
	];

	return (
		<section className={styles.feedback}>
			<FeedbackHeader />
			<Tabs tabsArray={feedbackTabsArray} />
			<CardRow title='Recommendations' />
			<CardRow title='Recently viewed' />
		</section>
	);
};
