import styles from './Accessories.module.scss'
import {useState} from "react";
import {Button} from "../../UI/Button/Button";
import cs from "classnames";
import {CardRow} from "../../UI/blocks/CardRow/CardRow";
import ipods from '../../../assets/temp/ipods.png'

const filters = [
    {title: 'See All Categories', value: 'all'},
    {title: 'Popular', value: 'popular'},
    {title: 'Chargers', value: 'chargers'},
    {title: 'Power Banks', value: 'powerbanks'},
    {title: 'Headphones, Earphones', value: 'headearphones'},
    {title: 'Cases', value: 'cases'}
]

const goods = [
    {
        id: 1,
        category: 'chargers',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 4.5,
        reviews: 16,
        price: '8 499',
        image: ipods,
        oldPrice: '8 200',
        discount: 5
    },
    {
        id: 2,
        category: 'powerbanks',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 4,
        reviews: 5,
        price: '2 499',
        image: ipods,
    },
    {
        id: 3,
        category: 'popular',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 2,
        reviews: 387,
        price: '6 499',
        image: ipods,
    },
    {
        id: 4,
        category: 'popular',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 4.5,
        reviews: 16,
        price: '8 499',
        image: ipods,
    },
    {
        id: 5,
        category: 'headearphones',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 4.5,
        reviews: 16,
        price: '8 499',
        image: ipods,
    },
    {
        id: 5,
        category: 'popular',
        name: 'Apple AirPods (3rd gen) with Lightning Charging..',
        rating: 4.5,
        reviews: 16,
        price: '8 499',
        image: ipods,
    },
]

export const Accessories = () => {
    const [activeCategory, setActiveCategory] = useState(filters[0]);

    const goodsByFilter = goods
        .filter((item) => item.category === activeCategory.value)
        .map((item, _, array) => (
            <CardRow title={activeCategory.title} data={array}/>
        ));

    const allGoods = filters.map(({title, value}, index) => {
        if (index > 0) { //не береться до уваги фільтр all
            const filtered = goods.filter((item) => item.category === value);
            return <CardRow title={title} data={filtered}/>
        }
    });
    return <div className={styles.accessories}>
        <div className={styles.filters}>
            {filters.map((item) => (
                    <Button
                        className={cs(styles.filter, {[styles['filter-active']]: item.value === activeCategory.value})}
                        onClick={() => setActiveCategory(item)}>{item.title}</Button>
                )
            )}
        </div>
        <div className={styles.category}>
            {activeCategory.value === 'all' ? allGoods : goodsByFilter}
        </div>
    </div>;
};