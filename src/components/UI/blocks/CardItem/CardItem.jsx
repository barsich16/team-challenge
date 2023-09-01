import styles from './CardItem.module.scss';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';
import {ReactComponent as Cart} from '../../../../assets/icons/cart.svg';
import cs from 'classnames';
import {useState} from 'react';
import {ToolTip} from '../../Tooltip/Tooltip';
import {Icon} from "../../Icon/Icon";
import {StarsRating} from "../../Rating/StarsRating";

export const CardItem = ({data}) => {
    console.log(Array.isArray(data));
    const isArray = Array.isArray(data);
    const firstElement = isArray ? data[0] : data;
    const [activeItem, setActiveItem] = useState(firstElement);
    const {image, id, name, rating, reviews, price, oldPrice, discount} = activeItem;

    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.btn_group}>
                        <Icon type='like'/>
                        <Icon type='compare'/>
                    </div>

                    <div className={styles.image_block}>
                        <img src={image} alt=''/>
                    </div>
                    <div className={styles.variants}>
                        {isArray && (
                            <div className={styles.colors}>
                                {data.map((item, index) => (
                                    <span
                                        key={index}
                                        onClick={() => setActiveItem(item)}
                                        className={cs(styles.color, {
                                            [styles.color_active]: item.id == id,
                                        })}
                                        style={{backgroundColor: item.colorValue}}
                                    ></span>
                                ))}
                            </div>
                        )}
                    </div>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.reviews}>
                        <StarsRating initialValue={rating} size={16} readonly/>
                        <span className={styles.review}>
						    ({reviews})
					    </span>
                    </div>

                    <div className={styles.buy}>
                        <div className={styles.price}>
                            <div className={styles.price_value}>{price}</div>
                            {oldPrice && (
                                <>
                                    <div className={styles.price_old}>{oldPrice}</div>
                                    <div className={styles.price_discount}>
                                        <ToolTip text={'Promotional offer'}>
                                            <div className={styles.price_discount_value}>-{discount}%</div>
                                        </ToolTip>
                                    </div>
                                </>
                            )}
                        </div>
                        <Icon type='cart' size='middle'/>
                        {/*<button className={styles.cart}>*/}
                        {/*    <Cart/>*/}
                        {/*</button>*/}
                    </div>
                </div>

            </div>
        </>
    );
};
