import React, { useRef, useState } from 'react';
import styles from './ToolTip.module.scss';
import { CSSTransition } from 'react-transition-group';

const transitionClasses = {
	enter: styles.enter,
	enterActive: styles.enterActive,
	exit: styles.exit,
	exitActive: styles.exitActive,
};

export const ToolTip = ({ children, text, customClass }) => {
	const refSetTimeout = useRef();
	const [showToolTip, setShowToolTip] = useState(true);
	const toolTipClasses = customClass
		? `${styles.tooltip} ${customClass}`
		: `${styles.tooltip}`;

	const onMouseEnterHandler = () => {
		refSetTimeout.current = setTimeout(() => {
			setShowToolTip(true);
		}, 750);
	};

	const onMouseLeaveHandler = () => {
		clearTimeout(refSetTimeout.current);
		setShowToolTip(false);
	};

	return (
		<div
			className={styles.container}
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			{children}
			{/*<div className={styles.center}>*/}
			<CSSTransition
				in={showToolTip}
				timeout={750}
				classNames={transitionClasses}
				unmountOnExit
			>
				<div className={toolTipClasses}>{text}</div>
			</CSSTransition>
			{/*</div>*/}
		</div>
	);
};
