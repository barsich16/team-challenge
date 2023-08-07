import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';

import styles from './TestSlider.module.scss';

export function TestSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className={styles.main}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView="4"
                    mousewheel={true}
                    spaceBetween={10}
                    direction="vertical"
                    // pagination={{clickable: true}}
                    scrollbar={{draggable: true}}
                    // freeMode={true}
                    // watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.swiperVertical}
                    wrapperClass={styles.wrapper}
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                    </SwiperSlide>
                </Swiper></div>

        </>
    );
}
