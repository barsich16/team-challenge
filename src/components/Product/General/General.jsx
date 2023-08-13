import { Overview } from './Overview';
import { Feedback } from './Feedback';
import { SpecificationsMain } from '../../Specifications/SpecificationsMain';
import { dataForMainSpecifications as data } from '../../../data/items';
import styles from './General.module.scss';
import React from 'react';

export const General = () => {
	return (
		<>
			<Overview />
			{/*<PresentationIphone />*/}
			<SpecificationsMain data={data} />
			<h1 className={styles.title}>
				Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
			</h1>
			<Feedback />
			{/*    Recomendations*/}
			{/*    Recently viewed*/}
		</>
	);
};