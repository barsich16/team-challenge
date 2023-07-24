import React from 'react';
import { TabContent } from '../TabContent/TabContent';
import css from './TabContainer.module.css';

export const TabContainer = ({ items }) => {
	const [active, setActive] = React.useState(0);

	const openTab = (e) => {
		setActive(e.target.dataset.index);
	};

	return (
		<div>
			<div className={css.container}>
				{items.map((item, i) => (
					<button
						className={i === Number(active) ? css.active : css.btn}
						onClick={openTab}
						data-index={i}
						key={i}
					>
						{item.tab}
					</button>
				))}
			</div>
			{items[active] && <TabContent {...items[active]} />}
		</div>
	);
};
