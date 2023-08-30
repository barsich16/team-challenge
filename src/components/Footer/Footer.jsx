import css from './Footer.module.scss';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Ua } from '../../assets/icons/UA.svg';
import { ReactComponent as En } from '../../assets/icons/EN.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';

export const Footer = () => {
	return (
		<div className={css.footer}>
			<div className='wrapper'>
				<div className={css.contacts}>
					<div className={css.footer_left}>
						<div className={css.logo}></div>
						<div className={css.slogan}>Simplify Your Tech Journey</div>
						<div className={css.localisation}>
							<En fill='white' size={26} />
							<Ua fill='white' size={26} />
						</div>
						<div className={css.icons}>
							<Instagram fill='white' size={24} />
							<Twitter fill='white' size={24} />
							<Facebook fill='white' size={24} />
						</div>
					</div>
					<div className={css.footer_center}>
						<div className={css.menu}>
							<h2 className={css.footer_center_title}>TechEase</h2>
							<p>About</p>
							<p>Vacancies</p>
							<p>News</p>
							<p>Customer Support</p>
						</div>
						<div className={css.menu2}>
							<h2 className={css.footer_center_title}>Services</h2>
							<p>Find your order</p>
							<p>Service centers</p>
							<p>Status of the product under repair</p>
						</div>
						<div className={css.menu2}>
							<h2 className={css.footer_center_title}>Information</h2>
							<p>Delivery and payment</p>
							<p>Warranty and service</p>
							<p>Exchange and return of goods</p>
							<p>Credit</p>
							<p>Questions and answers</p>
							<p>Website conditions</p>
						</div>
					</div>

					<div className={css.footer_right}>
						<h2 className={css.title}>Subscribe to our newsletter!</h2>
						<p className={css.footer_right_text}>We will not bother you :)</p>
						<div className={css.footer_right_email}>example@email.com</div>
						<button type='button' className={css.footer_right_button}>
							<Email fill='white' size={24} />
							<span className={css.button_text}>Subscribe</span>
						</button>
					</div>
				</div>
				<div className={css.rights}>
					<p className={css.text}>TECH EASE 2023. All Rights Reserved.</p>
					<div className={css.policy}>
						<p className={css.bottom_text}>Cookie Policy</p>
						<p className={css.bottom_text}>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};
