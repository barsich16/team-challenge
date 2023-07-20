import styles from './CardItem.module.scss';
import src from './iphone.png';
import cs from 'classnames';
import {useState} from "react";

export const CardItem = ({data}) => {
    const [activeItem, setActiveItem] = useState(data[0]);


    return (
        <>
            <div className={styles.main}>
                <div className={styles.image_block}>
                    <img src={src} alt=''/>
                </div>
                //Todo: при кліку на колір міняти іншу картку
                <div className={styles.colors}>
                    {data.map((item) => (
                        <span onClick={() => setActiveItem(item)}
                              className={cs(styles.color, {[styles.color_active]: item.id == activeItem.id})}
                              style={{backgroundColor: item.colorValue}}></span>
                    ))}
                </div>
                <h3 className={styles.name}>{activeItem.name}</h3>
                <div className={styles.reviews}></div>
                <p className={styles.old_price}></p>
                <div className={styles.info}>
						<span className={styles.price}>
							<span className={styles.price_old}></span>
							<span className={styles.price_discount}></span>
						</span>
                    <span>image</span>
                </div>
            </div>
        </>
    );
};
