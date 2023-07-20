import styles from './CardRow.module.scss';
import {CardItem} from '../CardItem/CardItem';

export const CardRow = () => {
    const data = [
        {
            id: 1,
            colorName: 'green',
            colorValue: '#333',
            image: 'png',
            name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
            price: 69999,
            oldPrice: 75999,
            rating: 4,
            reviews: 244,
            discount: 8,
        },
        {
            id: 2,
            colorName: 'red',
            colorValue: '#666',
            image: '/iphone.png',
            name: 'Apple iPhone 14 Pro Max 512GB Purple...',
            price: 79999,
            oldPrice: 85999,
            rating: 5,
            reviews: 245,
            discount: 9,
        },
        {
            id: 3,
            colorName: 'red',
            colorValue: '#666',
            image: '/iphone.png',
            name: 'Apple iPhone 14 Pro Max 512GB Purple...',
            price: 79999,
            oldPrice: 85999,
            rating: 5,
            reviews: 245,
            discount: 9,
        },
        // {
        //     colorName: 'red',
        //     colorValue: '#666',
        //     image: '/iphone.png',
        //     name: 'Apple iPhone 14 Pro Max 512GB Purple...',
        //     price: 79999,
        //     oldPrice: 85999,
        //     rating: 5,
        //     reviews: 245,
        //     discount: 9,
        // },
        // {
        //     colorName: 'red',
        //     colorValue: '#666',
        //     image: '/iphone.png',
        //     name: 'Apple iPhone 14 Pro Max 512GB Purple...',
        //     price: 79999,
        //     oldPrice: 85999,
        //     rating: 5,
        //     reviews: 245,
        //     discount: 9,
        // }
    ];
    return (
        <div className={styles.main}>
            <CardItem data={data}/>
            {/*<CardItem />*/}
            {/*<CardItem />*/}
            {/*<CardItem />*/}
            {/*<CardItem />*/}
        </div>
    );
};
