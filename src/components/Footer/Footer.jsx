import css from './Footer.module.scss';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {LanguageSwitcher} from "../UI/LanguageSwitcher/LanguageSwitcher";
import {Icon} from "../UI/Icon/Icon";
import {Button} from "../UI/Button/Button";

export const Footer = () => {
    return (
        <div className={css.footer}>
            <div className='wrapper'>
                <div className={css.contacts}>
                    <div className={css.left}>
                        <div className={css.logo}></div>
                        <div className={css.slogan}>Simplify Your Tech Journey</div>
                        <LanguageSwitcher theme='dark'/>
                        <div className={css.socials}>
                            <Instagram fill='white' size={24}/>
                            {/*<Icon type='instagram'/>*/}
                            <Twitter fill='white' size={24}/>
                            <Facebook fill='white' size={24}/>
                        </div>
                    </div>
                    <div className={css.center}>
                        <div className={css.menu}>
                            <h2 className={css.center_title}>TechEase</h2>
                            <p>About</p>
                            <p>Vacancies</p>
                            <p>News</p>
                            <p>Customer Support</p>
                        </div>
                        <div className={css.menu}>
                            <h2 className={css.center_title}>Services</h2>
                            <p>Find your order</p>
                            <p>Service centers</p>
                            <p>Status of the product under repair</p>
                        </div>
                        <div className={css.menu}>
                            <h2 className={css.center_title}>Information</h2>
                            <p>Delivery and payment</p>
                            <p>Warranty and service</p>
                            <p>Exchange and return of goods</p>
                            <p>Credit</p>
                            <p>Questions and answers</p>
                            <p>Website conditions</p>
                        </div>
                    </div>
                    <div className={css.right}>
                        <h2 className={css.right_title}>Subscribe to our newsletter!</h2>
                        <p className={css.right_text}>We will not bother you :)</p>
                        <input className={css.right_input} placeholder='example@email.com'/>
                        <Button className={css.right_button}>Subscribe</Button>
                    </div>
                </div>
                <div className={css.bottom}>
                    <p className={css.bottom_text}>TECH EASE 2023. All Rights Reserved.</p>
                    <div className={css.policy}>
                        <p className={css.bottom_text}>Cookie Policy</p>
                        <p className={css.bottom_text}>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
