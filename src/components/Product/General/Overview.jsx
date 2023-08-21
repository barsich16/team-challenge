import styles from "./General.module.scss";
import {TestSlider} from "../Sliders/TestSlider/TestSlider";
import {mainProductInfo} from "../../../data/items";
import cs from "classnames";
import {Icon} from "../../UI/Icon/Icon";
import {Button} from "../../UI/Button/Button";
import {ColorCircles} from "../../UI/ColorCircles/ColorCircles";
import {ToolTip} from "../../UI/Tooltip/Tooltip";
import {ReactComponent as Cart} from "../../../assets/icons/cart.svg";
import src from "../../../assets/icons/mono.png";
import {ReactComponent as Credit} from "../../../assets/icons/credit.svg";

const data = [
    {
        id: 1,
        colorName: 'green',
        colorValue: '#000',
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
        colorValue: '#FBECDD',
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
        colorValue: '#E0E4F0',
        image: '/iphone.png',
        name: 'Apple iPhone 14 Pro Max 512GB Purple...',
        price: 79999,
        oldPrice: 85999,
        rating: 5,
        reviews: 245,
        discount: 9,
    },
];

export const Overview = () => {

    return (
        <section className={styles.overview}>
            <div className={styles.gallery}>
                <TestSlider/>
                <MainInfo data={mainProductInfo}/>
                {/*Video Consultation Block*/}
                <div className={styles.block}>
                    <div className={cs(styles.del_item)}>
                        <Icon type='truck' className={styles.icon}/>
                        <p><b>Interested in the product?</b><br/> Our salesperson will show it online and answer
                            your
                            questions.</p>
                    </div>
                    <Button
                        className={styles.consult_btn}
                        textSize='middle'
                        variant='outlined'
                    >
                        Video Consultation
                    </Button>
                </div>
            </div>
            {/*       Right Part       */}
            <div className={styles.data}>
                {/*Main Block*/}
                <div className={cs(styles.block, styles.block_down)}>
                    <ColorCircles data={data} activeItemId={1}/>
                    <div className={styles.memory}>
                        <Button
                            textSize='middle'
                            variant='outlined'
                            className={`${styles.memory_btn} ${styles.memory_btn_active}`}
                        >
                            125 GB
                        </Button>
                        <Button
                            textSize='middle'
                            variant='outlined'
                            className={styles.memory_btn}
                        >
                            125 GB
                        </Button>
                        <Button
                            textSize='middle'
                            variant='outlined'
                            className={styles.memory_btn}
                        >
                            125 GB
                        </Button>
                        <Button
                            textSize='middle'
                            variant='outlined'
                            className={styles.memory_btn}
                        >
                            125 GB
                        </Button>
                    </div>
                </div>
                <div className={cs(styles.block, styles.block_up, styles.block_gap)}>
                    <div className={styles.price}>
                        <div className={styles.price_old}>75 999</div>
                        <div className={styles.price_value}>
                            <span>69 999</span>
                            <div className={styles.price_discount}>
                                <ToolTip text={'Promotional offer'}>
                                    <div className={styles.price_discount_value}>-8%</div>
                                </ToolTip>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <Icon type='like'/>
                        <Icon type='compare'/>
                        <Button className={styles.button} icon={<Cart/>}>
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/*Credit Block*/}
                <div className={cs(styles.block, styles.block_gap)}>
                    <div className={styles.credit_info}>
                        <span className={styles.credit_info_title}>On credit from</span>
                        <span className={styles.credit_info_value}>8 499 / mon</span>
                    </div>
                    <div className={styles.credit_banks}>
                        <div className={styles.credit_banks_item}>
                            <img src={src} alt=''/>
                            <span>4</span>
                        </div>
                        <div className={styles.credit_banks_item}>
                            <img src={src} alt=''/>
                            <span>4</span>
                        </div>
                        <div className={styles.credit_banks_item}>
                            <img src={src} alt=''/>
                            <span>4</span>
                        </div>
                        <div className={styles.credit_banks_item}>
                            <img src={src} alt=''/>
                            <span>4</span>
                        </div>
                    </div>
                    <Button
                        className={styles.credit_btn}
                        textSize='middle'
                        variant='outlined'
                        icon={<Credit/>}
                    >
                        Buy on Credit
                    </Button>
                </div>

                {/*Delivery Block*/}
                <div className={cs(styles.block, styles.block_down)}>
                    <div className={styles.del_item}>
                        <Icon type='map' className={styles.icon}/>
                        <p>Delivery in: <b>Kyiv</b></p>
                    </div>
                    <Icon type='arrow-right' className={styles.icon}/>
                </div>
                <div
                    className={cs(styles.block, styles.block_up, styles.block_gap)}
                >
                    <div className={cs(styles.way, styles.column)}>
                        <div className={styles.del_item}>
                            <Icon type='office' className={styles.icon}/>
                            <p>Pickup from postal office</p>
                        </div>
                        <div className={styles.del_item}>
                            <Icon type='truck' className={styles.icon}/>
                            <p>Delivery by TechEase courier</p>
                        </div>
                    </div>
                    <div className={cs(styles.date, styles.column)}>
                        <p>Shipping tomorrow</p>
                        <p>Shipping on Aug 1 from 10 AM</p>
                    </div>
                    <div className={cs(styles.cost, styles.column)}>
                        <p className={styles.free}>Free of charge</p>
                        <p>79 ₴</p>
                    </div>
                </div>

                {/*Payment and guarantee Block*/}
                <div className={cs(styles.block, styles.block_down)}>
                    <div className={cs(styles.del_item)}>
                        <Icon type='wallet' className={styles.icon}/>
                        <p><b>Payment.</b> Payment upon receipt of goods, Payment by card in the branch, Google Pay,
                            Online with a card, Cashless for legal entities, Pay online with the "Baby's package"
                            social
                            card, Cashless for individuals, Apple Pay, Pay online with the "eSupport" card, Visa,
                            Mastercard</p>
                    </div>
                </div>
                <div
                    className={cs(styles.block, styles.block_up)}
                >
                    <div className={cs(styles.del_item)}>
                        <Icon type='shield' className={styles.icon}/>
                        <p><b>Guarantee.</b> 12 months. Exchange/Return of goods within 14 days</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MainInfo = ({data}) => {
    return (
        <div className={styles.main_info}>
            {data.map(({name, value, icon}, index) => (
                <div key={index} className={styles.info_item}>
                    <Icon type={icon} className={styles.info_icon}/>
                    <div className={styles.info}>
                        <p className={styles.info_title}>{name}</p>
                        <p className={styles.info_value}>{value}</p>
                    </div>
                </div>))}
        </div>
    )
}