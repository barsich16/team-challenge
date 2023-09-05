import React, {useState} from 'react';
import styles from '../Feedback.module.scss';
import {Icon} from '../../../UI/Icon/Icon';
import cs from 'classnames';
// import { ReviewList, ShortProductInfo } from '../../General/Feedback';
import review_img from '../../../../assets/temp/review_img.jpg';
import {ShortProductInfo} from './ShortProductInfo';
import {ReviewList} from './ReviewList';
import {Button} from "../../../UI/Button/Button";

const imagesArray = [
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
    review_img,
];

//Types can be 'reviews' or 'questions'
export const FeedbackTab = ({type = 'reviews', shortType, changeTab}) => {
    return (
        <div className={styles.tab}>
            {type === 'reviews' && <ReviewImages/>}

            {/*Feedback short info and users items */}
            <div className={styles.tab_inner}>
                <ShortProductInfo/>
                <ReviewList type={type} shortType={shortType} changeTab={changeTab}/>
            </div>
        </div>
    );
};

function ReviewImages() {
    const [showSingleRow, setShowSingleRow] = useState(true);

    return (
        <div className={styles.images}>
            <div className={styles.images_title}>
                <h5>Reviews with images </h5>
                <Button
                    onClick={() => setShowSingleRow((prev) => !prev)}
                    size='small'
                    variant='outlined'
                    icon={<Icon type='picture--more' size='small'/>}
                    clickedText='Hide All'
                >Show All</Button>
            </div>
            {/*Feedback Image Block */}
            <div className={styles.images_gallery}>
                {showSingleRow
                    ? imagesArray
                        .slice(0, 4)
                        .map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`}/>
                        ))
                    : imagesArray.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`}/>
                    ))}
            </div>
        </div>
    );
}
