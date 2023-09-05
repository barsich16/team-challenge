import cs from 'classnames';
import styles from './Product.module.scss';
import {Breadcrumbs} from '../UI/Breadcrumbs/Breadcrumbs';
import {ReactComponent as Star} from '../../assets/icons/star.svg';
import {Tabs} from '../TabContainer/TabContainer';
import {General} from './General/General';
import React, {useState} from 'react';
import {Feedback} from './Feedback/Feedback';
import {Specifications} from "./Specifications/Specifications";
import {CardRow} from "../UI/blocks/CardRow/CardRow";
import {Accessories} from "./Accessories/Accessories";
import {StarsRating} from "../UI/Rating/StarsRating";


export const Product = () => {
    console.log('Product');
    const [activeTab, setActiveTab] = useState(0);
    const productTabsArray = [
        {tabName: 'General', content: <General changeTab={setActiveTab}/>},
        {tabName: 'Specifications', content: <Specifications/>},
        {
            tabName: 'Feedback & Questions (324)',
            content: <Feedback/>,
        },
        {tabName: 'Accessories', content: <Accessories/>},
        {tabName: 'Availability', content: <div>Availability</div>},
    ];

    const product = {
        rating: 4,
    };
    return (
        <div className={cs('wrapper', styles.main)}>
            <Breadcrumbs/>
            <div className={styles.name_rating}>
                <h1 className={styles.title}>
                    Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
                </h1>
                <div className={styles.stars}>
                    <StarsRating size={32} initialValue={4.2} readonly/>
                    <span className={styles.stars_count}>(312)</span>
                </div>
            </div>

            <Tabs tabsArray={productTabsArray} activeTab={activeTab} setActiveTab={setActiveTab}
                  className={styles.wrapper}/>
            <CardRow title='Recommendations'/>
            <CardRow title='Recently viewed'/>
        </div>
    );
};
