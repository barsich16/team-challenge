import css from './Footer.module.scss';
import {LanguageSwitcher} from "../UI/LanguageSwitcher/LanguageSwitcher";
import {Icon} from "../UI/Icon/Icon";
import {Button} from "../UI/Button/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";

export const Footer = () => {
    const {register, handleSubmit} = useForm();
    const [isSubscribed, setIsSubscribed] = useState(false);
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setIsSubscribed(true);//
        setTimeout(() => setIsSubscribed(false), 5000);
    };
    const subscribeHandler = (data) => {
        console.log(data);
    }
    return (
        <div className={css.footer}>
            <div className='wrapper'>
                <div className={css.contacts}>
                    <div className={css.left}>
                        <div className={css.logo}></div>
                        <div className={css.slogan}>Simplify Your Tech Journey</div>
                        <LanguageSwitcher theme='dark'/>
                        <div className={css.socials}>
                            <Icon type='instagram' size='small'/>
                            <Icon type='twitter' size='small'/>
                            <Icon type='facebook' size='small'/>
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
                    <form onSubmit={handleSubmit(onSubmit)} className={css.right}>
                        <h2 className={css.right_title}>Subscribe to our newsletter!</h2>
                        <p className={css.right_text}>We will not bother you :)</p>
                        <input {...register("email")} type="email" className={css.right_input}
                               placeholder='example@email.com'/>
                        <Button type='submit' variant='primary' className={css.right_button}
                                icon={<Icon size='small' type='email'/>} clickedText='Subscribed'
                                isClickAllowed={isSubscribed}>Subscribe</Button>
                    </form>
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
