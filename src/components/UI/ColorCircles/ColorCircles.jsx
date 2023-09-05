import styles from "./ColorCircles.module.scss";
import cs from "classnames";

export const ColorCircles = ({data, setActiveItem, activeItemId, size = 'middle'}) => {
    const handleClick = (item) => {
        //link to other product
        alert(`There has to be a redirecting to item with ${item.colorName} color`)
    }
    return <div className={styles.colors}>
        {data.map((item, index) => (
            <span
                key={index}
                onClick={() => handleClick(item)}
                className={cs(styles.color, {
                    [styles.color_active]: item.id == activeItemId,
                })}
                style={{backgroundColor: item.colorValue}}
            ></span>
        ))}
    </div>;
};