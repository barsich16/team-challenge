import styles from './General.module.scss';
import {Button} from '../../UI/Button/Button';
import {Icon} from '../../UI/Icon/Icon';
import {ReactComponent as StarFilled} from '../../../assets/icons/star-rating-filled.svg';
import {Rating} from 'react-simple-star-rating';
import React, {useState} from 'react';
import {Tabs} from '../../TabContainer/TabContainer';
import review_img from '../../../assets/temp/review_img.jpg'
import {ReactComponent as Star} from "../../../assets/icons/star.svg";
import cs from "classnames";
import {SpecificationsMain} from "../../Specifications/SpecificationsMain";
import {dataForMainSpecifications as data} from '../../../data/items';
import iphone from '../../../assets/icons/full-iphone.png';
import {ToolTip} from "../../UI/Tooltip/Tooltip";
import {ReactComponent as Cart} from "../../../assets/icons/cart.svg";
import {SearchInput} from "../../UI/SearchBar/SearchInput/SearchInput";
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";

const imagesArray = [
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img
];

export const ShortProductInfo = () => {
    return (
        <div className={styles.shortProduct}>
            <div className={styles.shortProduct_card}>
                <div className={styles.shortProduct_img}>
                    <img src={iphone} alt=""/>
                </div>
                <div className={styles.shortProduct_info}>
                    <p className={styles.shortProduct_name}>Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)</p>
                    <div className={styles.shortProduct_rating}>
                        <Rating
                            fillIcon={<StarFilled width={20} height={20}/>}
                            emptyIcon={<StarFilled width={20} height={20}/>}
                            size={16}
                            fillColor='#f6c660'
                            allowFraction
                            readonly
                            initialValue={3.7}
                        />
                        <span className={styles.shortProduct_rating_value}>(312)</span>
                    </div>
                    <div className={styles.buy}>
                        <div className={styles.price}>
                            <div className={styles.price_value}>69 999</div>
                            <div className={styles.price_old}>75 999</div>
                            <div className={styles.price_discount}>
                                <ToolTip text={'Promotional offer'}>
                                    <div className={styles.price_discount_value}>-8%</div>
                                </ToolTip>
                            </div>
                        </div>
                        <Icon className={styles.cart} type='cart' size='small'/>
                    </div>
                </div>
            </div>

            <SpecificationsMain type='short' data={data}/>
        </div>
    )
};

export const ReviewList = () => {
    const [results, setResults] = useState([]);

    return (<div className={styles.list}>
        <div className={styles.list_header}>
            <div className={styles.search}>
                <SearchInput className={styles.search_input} setResults={setResults}/>
                <SearchIcon className={styles.icon}/>
            </div>

            <span className={styles.list_variant}>Relevance</span>
            <span className={styles.list_variant}>Newest</span>
            <span className={styles.list_variant}>Best</span>
            <span className={styles.list_variant}>Worst</span>
        </div>
        <div className={styles.list_items}>
            <div className={styles.list_item}></div>
        </div>
    </div>)
}

export const Reviews = () => {
    const [showSingleRow, setShowSingleRow] = useState(true);

    return <div className={styles.reviews}>
        <div className={styles.reviews_title}>
            <h5>Reviews with images </h5>
            <Icon onClick={() => setShowSingleRow(prev => !prev)} size='small'
                  className={cs(styles.show_img, {[styles.show_img_active]: !showSingleRow})} type={'arrow-right'}/>
        </div>
        {/*Reviews Image Block*/}
        <div className={styles.reviews_gallery}>
            {showSingleRow
                ? imagesArray.slice(0, 4).map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`}/>
                ))
                : imagesArray.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`}/>
                ))}
        </div>
        {/*Reviews short info and items */}
        <div className={styles.reviews_inner}>
            <ShortProductInfo/>
            <ReviewList/>
        </div>
    </div>;
};

export const Questions = () => {
    return <div>Questions</div>;
};

const feedbackTabsArray = [
    {tabName: 'Reviews (312)', content: <Reviews/>},
    {tabName: 'Questions (142)', content: <Questions/>},
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
            <div className={styles.flex_center}>
                <div className={styles.rating}>
                    <span className={styles.rating_value}>4.8</span>
                    <Rating
                        fillIcon={<StarFilled width={24} height={24}/>}
                        emptyIcon={<StarFilled width={24} height={24}/>}
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
                        icon={<Icon size='small' type='help-circle'/>}
                    >
                        Ask a question
                    </Button>
                    <Button
                        textSize='middle'
                        // onClick={}
                        className={styles.leave_review_btn}
                        icon={<Icon size='small' type='help-circle'/>}
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
            <Tabs tabsArray={feedbackTabsArray}/>
        </section>
    );
};


