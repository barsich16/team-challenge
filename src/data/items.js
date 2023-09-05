import iphone from '../assets/icons/full-iphone.png';
import {General} from '../components/Product/General/General';
import React from 'react';
import src from "../assets/temp/iphone.png";

export const items = [
    {
        tab: 'Все про товар',
        title: 'Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
        content:
            'something about Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
    },
    {
        tab: 'Характеристики',
        title: 'Характеристики Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
        content:
            'something about Характеристики Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
    },
    {
        tab: 'Відгуки',
        title: 'Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
        content:
            'Відгуки про Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
    },
    {
        tab: 'Питання',
        title:
            'Питання і відповіді (FAQ) Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
        content:
            'something about Питання і відповіді (FAQ) Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
    },
    {
        tab: 'Аксесуари',
        title: 'Аксесуари Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
        content:
            'something about Аксесуари Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
    },
];

export const itemsForCardRow = [
    [
        {
            id: 1,
            colorName: 'green',
            colorValue: '#333',
            image: src,
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
            image: src,
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
            image: src,
            name: 'Apple iPhone 14 Pro Max 512GB Purple...',
            price: 79999,
            oldPrice: 85999,
            rating: 5,
            reviews: 245,
            discount: 9,
        },
    ],
    {
        id: 10,
        colorName: 'green',
        colorValue: '#333',
        image: src,
        name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
        price: 69999,
        oldPrice: 75999,
        rating: 4,
        reviews: 244,
        discount: 8,
    },
    {
        id: 11,
        colorName: 'green',
        colorValue: '#333',
        image: src,
        name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
        price: 69999,
        oldPrice: 75999,
        rating: 4,
        reviews: 244,
        discount: 8,
    },
    {
        id: 12,
        colorName: 'green',
        colorValue: '#333',
        image: src,
        name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
        price: 69999,
        oldPrice: 75999,
        rating: 4,
        reviews: 244,
        discount: 8,
    },
    {
        id: 13,
        colorName: 'green',
        colorValue: '#333',
        image: src,
        name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
        price: 69999,
        oldPrice: 75999,
        rating: 4,
        reviews: 244,
        discount: 8,
    },
    {
        id: 14,
        colorName: 'green',
        colorValue: '#333',
        image: src,
        name: 'Apple iPhone 14 Pro Max 512GB Deep Purple...',
        price: 69999,
        oldPrice: 75999,
        rating: 4,
        reviews: 244,
        discount: 8,
    },
];

export const imagesURLArray = [
    iphone,
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
];

export const mainProductInfo = [
    {name: 'Screen diagonal', value: '6,7"', icon: 'truck'},
    {name: 'Main camera', value: '48+12+12 MP', icon: 'truck'},
    {name: 'Processor', value: 'Apple A16 Bionic', icon: 'truck'},
    {name: 'Battery capacity', value: '3200 MAg', icon: 'truck'},
    {name: 'Front camera', value: '12 MP', icon: 'truck'},
    {name: 'Number of cores', value: '6', icon: 'truck'},
];

export const dataForMainSpecifications = [
    {
        name: 'Series',
        value: 'Iphone 14 Pro',
    },
    {
        name: 'Graduation Year',
        value: 2022,
    },
    {
        name: 'Operating system',
        value: 'iOS 16',
    },
    {
        name: 'Screen diagonal',
        value: '6,7"',
    },
    {
        name: 'Processor',
        value: 'Apple A16 Bionic',
    },
    {
        name: 'Number of cores',
        value: '6',
    },
    {
        name: 'Internal memory',
        value: '512 GB',
    },
    {
        name: 'RAM',
        value: '6 GB',
    },
    {
        name: 'Main camera',
        value: '48 MP, 12 MP, 12 MP',
    },
    {
        name: 'Front camera',
        value: '12 MP',
    },
    {
        name: 'Battery capacity',
        value: '3200 MAg',
    },
];

// export const ProductTabs = [
// 	{ tabName: 'General', content: <General /> },
// 	{ tabName: 'Specifications', content: <div>Specifications</div> },
// ];
export const specifications = [
    {
        label: 'Main',
        data: [
            {
                name: 'Series',
                value: 'Iphone 14 Pro',
            },
            {
                name: 'Graduation Year',
                value: 2022,
            },
            {
                name: 'Color',
                value: 'Deep Purple',
            },
        ],
    },
    {
        label: 'Memory',
        data: [
            {
                name: 'Internal Memory',
                value: '512 GB',
            },
            {
                name: 'RAM',
                value: '6 GB',
            },
        ],
    },
];
