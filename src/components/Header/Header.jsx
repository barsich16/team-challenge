import styles from './Header.module.scss';
import { useState } from 'react';

export const Header = () => {
	let [isShow, setIsShow] = useState(false);
	const showOverlay = () => {
		setIsShow(true);
	};

	const hideOverlay = () => {
		setIsShow(false);
	};

	return (
		<>
			<header
				className={`${styles.header} ${isShow ? styles.header_open : ''}`}
			>
				<HeaderItem isActive showOverlay={showOverlay}>
					Burger
				</HeaderItem>
				<HeaderItem isActive showOverlay={showOverlay}>
					Searchbar
				</HeaderItem>
				<HeaderItem isActive showOverlay={showOverlay}>
					Cart
				</HeaderItem>
			</header>
			<div
				onClick={hideOverlay}
				className={`${styles.wrapper} ${isShow ? styles.wrapper_open : ''}`}
			/>
		</>
	);
};

const HeaderItem = ({ showOverlay, children }) => {
	return <div onClick={showOverlay}>{children}</div>;
};
