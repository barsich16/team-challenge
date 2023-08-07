import cs from 'classnames';
import styles from './Product.module.scss';
import {Breadcrumbs} from "../UI/Breadcrumbs/Breadcrumbs";
import {ReactComponent as Star} from "../../assets/icons/star.svg";
import {Tabs} from "../TabContainer/TabContainer";
import {GallerySlider} from "./Sliders/GallerySlider/GallerySlider";
import {TestSlider} from "./Sliders/TestSlider/TestSlider";

export const Product = () => {
    const product = {
        rating: 4,
    }
    return <div className={cs('wrapper', styles.main)}>
        <Breadcrumbs/>
        <div className={styles.name_rating}>
            <h1 className={styles.title}>Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)</h1>
            <div className={styles.stars}>
                {new Array(5).fill().map((_, index) => (
                    <Star
                        className={cs({
                            [styles.star_disabled]: product.rating <= index,
                        })}
                        width={32}
                        height={32}
                    />
                ))}
                <span className={styles.stars_count}>(312)</span>
            </div>
        </div>
        {/*<GallerySlider/>*/}
        <TestSlider/>
        <Tabs/>
    </div>;
};