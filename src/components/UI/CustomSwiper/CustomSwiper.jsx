import React, {useRef} from "react";
import {Navigation, Scrollbar} from "swiper/modules";
import {Swiper} from "swiper/react";
import cs from "classnames";
import styles from "./CustomSwiper.module.scss";
import {Icon} from "../Icon/Icon";

export const CustomSwiper = ({children, arrowsClasses, className, scrollbar = false, ...props}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const modules = [Navigation];
    const addProps = {...props};

    if (scrollbar) {
        modules.push(Scrollbar);
        addProps.scrollbar = {hide: true};
    }

    return (
        <Swiper
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            modules={modules}
            slidesPerView={4}
            spaceBetween={10}
            className={cs(styles.swiper, className)}
            {...addProps}
        >
            {children}
            <Icon className={cs(styles.arrow_prev, arrowsClasses?.prev)} type='arrow-right' ref={prevRef} size='small'/>
            <Icon className={cs(styles.arrow_next, arrowsClasses?.next)} type='arrow-right' ref={nextRef} size='small'/>
        </Swiper>
    )
}