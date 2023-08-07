import { ReactComponent as Like } from '../../../assets/icons/like.svg';
import { ReactComponent as Compare } from '../../../assets/icons/compare.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';

import styles from './Icon.module.scss';
import { useState } from 'react';
import cs from 'classnames';

export const Icon = ({ type, onClick, className }) => {
	const types = {
		like: <Like />,
		compare: <Compare />,
		user: <User />,
		cart: <Cart />,
		['arrow-right']: <ArrowRight />,
	};

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		if (onClick) {
			onClick();
		}

		setIsClicked((prevState) => !prevState);
	};

	const defaultStyles = cs(styles.button, {
		[styles[`button_${type}`]]: isClicked,
	});

	const buttonStyles = className ? cs(className, defaultStyles) : defaultStyles;

	return (
		<button className={buttonStyles} onClick={handleClick}>
			{types[type]}
		</button>
	);
};
