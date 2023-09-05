import React from 'react';
import styles from './CardRow.module.scss';
import {itemsForCardRow as items} from "../../../../data/items";
import {CardItem} from '../CardItem/CardItem';
import {CustomSwiper} from "../../CustomSwiper/CustomSwiper";
// Import Swiper dependencies
import {SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';

export const CardRow = ({title, data = items}) => {
    const arrows = {
        prev: styles.arrow_prev,
        next: styles.arrow_next
    }
    return (
        <div className={styles.main}>
            <h3>{title}</h3>
            <CustomSwiper className={styles.swiper} scrollbar={true} slidesPerView={5} arrowsClasses={arrows}>
                {data.map((item) => (
                    <SwiperSlide>
                        <CardItem data={item}/>
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </div>
    );
};