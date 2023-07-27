import css from './Footer.module.css';
import { FiInstagram } from 'react-icons/fi';
import { LuTwitter } from 'react-icons/lu';
import { FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
	return (
		<div className={css.container}>
			<div>
				<div className={css.logo}></div>
				<div className={css.slogan}>Motto, company slogan.</div>
				<div className={css.localisation}></div>
				<div className={css.icons}>
					<FiInstagram fill='white' size={20} />
					<LuTwitter fill='white' size={20} />
					<FaFacebookF fill='white' size={20} />
				</div>
				<p className={css.text}>NAME 2022. All Rights Reserved.</p>
			</div>
			<div className={css.menu}>
				<p>menu1</p>
				<p>menu2</p>
				<p>menu3</p>
				<p>menu4</p>
				<p>menu5</p>
			</div>
			<div className={css.menu2}>
				<p>menu6</p>
				<p>menu7</p>
				<p>menu8</p>
				<p>menu9</p>
				<p>menu10</p>
			</div>
			<div className={css.bottom}>
				<p className={css.bottom_text}>Cookie Policy</p>
				<p className={css.bottom_text}>Privacy Policy</p>
			</div>
		</div>
	);
};
