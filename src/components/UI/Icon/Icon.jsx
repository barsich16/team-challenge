import styles from './Icon.module.scss';
import {forwardRef, useState} from 'react';
import cs from 'classnames';
import {ReactComponent as Like} from '../../../assets/icons/like.svg';
import {ReactComponent as Compare} from '../../../assets/icons/compare.svg';
import {ReactComponent as User} from '../../../assets/icons/user.svg';
import {ReactComponent as Cart} from '../../../assets/icons/cart.svg';
import {ReactComponent as Instagram} from '../../../assets/icons/instagram.svg';
import {ReactComponent as Twitter} from '../../../assets/icons/twitter.svg';
import {ReactComponent as Facebook} from '../../../assets/icons/facebook.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/arrow-right.svg';
import {ReactComponent as Map} from '../../../assets/icons/map-pin.svg';
import {ReactComponent as Office} from '../../../assets/icons/office.svg';
import {ReactComponent as Truck} from '../../../assets/icons/truck.svg';
import {ReactComponent as Wallet} from '../../../assets/icons/wallet.svg';
import {ReactComponent as Shield} from '../../../assets/icons/shield.svg';
import {ReactComponent as HelpCircle} from '../../../assets/icons/help-circle.svg';
import {ReactComponent as Plus} from '../../../assets/icons/plus.svg';
import {ReactComponent as Minus} from '../../../assets/icons/minus.svg';
import {ReactComponent as Slash} from '../../../assets/icons/slash.svg';
import {ReactComponent as ThumbUp} from '../../../assets/icons/thumbs-up.svg';
import {ReactComponent as StarReview} from '../../../assets/icons/star-review.svg';
import {ReactComponent as Email} from '../../../assets/icons/email.svg';

export const Icon = forwardRef(({type, size = 'middle', onClick, className}, ref) => {

    const types = {
        like: <Like/>,
        compare: <Compare/>,
        user: <User/>,
        cart: <Cart/>,
        instagram: <Instagram/>,
        twitter: <Twitter/>,
        facebook: <Facebook/>,
        email: <Email/>,
        ['arrow-right']: <ArrowRight/>,
        map: <Map/>,
        office: <Office/>,
        truck: <Truck/>,
        wallet: <Wallet/>,
        shield: <Shield/>,
        ['help-circle']: <HelpCircle/>,
        plus: <Plus/>,
        minus: <Minus/>,
        slash: <Slash/>,
        ['thumb-up']: <ThumbUp/>,
        ['star-review']: <StarReview/>
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }

        setIsClicked((prevState) => !prevState);
    };

    const defaultStyles = cs(styles.button, styles[`button_${size}`], {
        [styles[`button_${type}`]]: isClicked,
    });

    const buttonStyles = className ? cs(className, defaultStyles) : defaultStyles;

    return (
        <button className={buttonStyles} onClick={handleClick} ref={ref}>
            {types[type]}
        </button>
    );
});
