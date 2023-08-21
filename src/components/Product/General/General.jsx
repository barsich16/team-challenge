import {Overview} from './Overview';
import {Feedback} from '../Feedback/Feedback';
import {SpecificationsMain} from '../../Specifications/SpecificationsMain';
import {dataForMainSpecifications as data} from '../../../data/items';
import styles from './General.module.scss';
import React from 'react';
import {CardRow} from "../../CardRow/CardRow";

export const General = React.memo(({changeTab}) => {
    console.log('General');
    return (
        <div className={styles.general}>
            <Overview/>
            {/*<PresentationIphone />*/}
            <SpecificationsMain data={data}/>
            <h1 className={styles.title}>
                Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
            </h1>
            <Feedback changeTab={changeTab} shortType/>
            <CardRow title='Recommendations'/>
            <CardRow title='Recently viewed'/>
        </div>
    );
});
