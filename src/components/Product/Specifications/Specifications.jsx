import React from 'react';
import styles from '../General/General.module.scss';
import {Overview} from '../General/Overview';
import {SpecificationsMain} from '../../Specifications/SpecificationsMain';
import {specifications} from '../../../data/items';
import {Feedback} from '../Feedback/Feedback';
import {CardRow} from '../../CardRow/CardRow';
import {SpecificationsFull} from '../../Specifications/SpecificationsFull';
import {SpecificationsHeader} from './components/SpecificationsHeader';

export const Specifications = React.memo(({changeTab}) => {
    console.log('Specifications');
    return (
        <div>
            <SpecificationsHeader/>
            <SpecificationsFull specifications={specifications}/>
        </div>
    );
});