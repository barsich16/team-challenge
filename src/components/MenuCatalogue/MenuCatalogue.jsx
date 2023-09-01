import { useState } from 'react';
import styles from './MenuCatalogue.module.scss';
import iconRight from '../../assets/icons/arrow-right.svg';
import iconPhone from '../../assets/icons/phone.svg';
import iconLaptop from '../../assets/icons/laptop.svg';
import iconHeadphone from '../../assets/icons/headphones.svg';
import iconCharge from '../../assets/icons/charge.svg';
import iconTV from '../../assets/icons/tv.svg';
import iconCamera from '../../assets/icons/camera.svg';
import iconWatch from '../../assets/icons/watch.svg';
import iconWashing from '../../assets/icons/washing machine.svg';
import iconPercentage from '../../assets/icons/percentage.svg';

const MENU_CATEGORIES = [
  {
    icon: iconPhone,
    title: 'Smartphones and Phones',
    right: iconRight,
    goods: [
      {
        brand: 'Apple',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
          "iPhone XR",
          "iPhone XS Max",
          "iPhone XS",
          "iPhone X",
          "iPhone 8 Plus",
          "iPhone 8",
          "iPhone 7 Plus",
          "iPhone 7",
        ]
      },
      {
        brand: 'Audio',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
        ]
      },
      {
        brand: 'Laptops and PCs',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
          "iPhone XR",
          "iPhone XS Max",
        ]
      },
    ]
  },
  {
    icon: iconLaptop,
    title: 'Laptops and PCs',
    right: iconRight,
    goods: [
      {
        brand: 'Laptops and PCs',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
          "iPhone XR",
      
        ]
      },
      {
        brand: 'Apple',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
          "iPhone XR",
          "iPhone XS Max",
          "iPhone XS",
          "iPhone X",
        ]
      }
    ]
  },
  {
    icon: iconHeadphone,
    title: 'Audio',
    right: iconRight,
    goods: [
      {
        brand: 'Audio',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
          "iPhone XR",
          "iPhone XS Max",
          "iPhone XS",
          "iPhone X",
          "iPhone 8 Plus",
          "iPhone 8",
          "iPhone 7 Plus",
          "iPhone 7",
        ]
      },
      {
        brand: 'UKr',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone SE (2nd generation)",
          "iPhone 11 Pro Max",
          "iPhone 11 Pro",
          "iPhone 11",
        ],
      },
      
      {
        brand: 'Laptops and PCs',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 11",
          "iPhone XR",
          "iPhone XS Max",
          "iPhone XS",
          "iPhone X",
          "iPhone 8 Plus",
          "iPhone 8",
          "iPhone 7 Plus",
          "iPhone 7",
        ]
      },
      {
        brand: 'Apple',
        model: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 13 mini",
          "iPhone 12 Pro Max",
          "iPhone 12 Pro",
          "iPhone 12",
          "iPhone 12 mini",
          "iPhone XS",
          "iPhone X",
          "iPhone 8 Plus",
          "iPhone 8",
          "iPhone 7 Plus",
          "iPhone 7",
        ],
        goods: []
      }
    ]
  },
  {
    icon: iconCharge,
    title: 'Accessories',
    right: iconRight,
  },
  {
    icon: iconTV,
    title: 'TVs and Multimedia',
    right: iconRight
  },
  {
    icon: iconCamera,
    title: 'Photo and Video',
    right: iconRight
  },
  {
    icon: iconWatch,
    title: 'Smart Watches',
    right: iconRight
  },
  {
    icon: iconWashing,
    title: 'Household Appliances',
    right: iconRight
  },
  {
    icon: iconPercentage,
    title: 'Special Offers',
    right: iconRight
  }
]

export const MenuCatalogue = ({isOpen}) => {
  const [activeItem, setActiveItem] = useState({})

  // console.log(activeItem)
  return (
       <div className={`${styles.menu}`}>
     
        <ul className={`${styles.menu__categories}`}>

          {MENU_CATEGORIES.map(categore => (
            <li
              id={categore.title}
              className={`
                ${styles.menu__categories__li}
                ${!categore.goods && styles.menu__disable}
                ${activeItem.title === categore.title && styles.menu__active}
              `}
              onMouseEnter={() => setActiveItem(categore)}
              onMouseLeave={() => setActiveItem({})}
            >
              <img
                className={`${styles.menu__categories__icon} ${styles.menu__active}`}
                src={categore.icon} 
                alt="icon"
              />
              <div className={`${styles.text__categories}`}>
                {categore.title}
              </div>
              <img 
                src={categore.right} 
                alt="arrow-right" 
                className={`${styles.menu__active} ${styles.menu__categories__icon}`}
              />
            </li>
          ))}
        </ul>
          
        {activeItem && activeItem.goods && (
          <div className={`${styles.wrapper_goods}`}>
            {activeItem.goods.map(goods => (
                <div 
                  id={goods.brand}
                >
                  <div className={`${styles.text__goods_title}`}>
                    {goods.brand}
                  </div>
                  <ul className="menu__goods__item">
                    {goods.model.map(item => (
                      <li
                        id={item}
                        className={`${styles.text__goods_item}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={styles.show_all}
                  >
                    Show All
                  </button>
                </div>
            ))}
          </div>
        )}
      </div>
  
  )
}