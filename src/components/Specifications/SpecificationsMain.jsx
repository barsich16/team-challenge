import css from './Specifications.module.scss';
import { ToolTip } from '../UI/Tooltip/Tooltip';
import { ReactComponent as HelpCircle } from '../../assets/icons/help-circle.svg';

export const SpecificationsMain = ({ data, type }) => {
	return (
		<div className={type === 'short' ? css.tableShort : css.table}>
			<h2 className={type === 'short' ? css.table_titleShort : css.table_title}>
				Main specifications
			</h2>
			<ul className={css.table_wrapper}>
				{data.map((item) => (
					<li>
						<div className={css.list_item_info}>
							<p
								className={
									type === 'short' ? css.table_featureShort : css.table_feature
								}
							>
								{item.name}
							</p>
							<p className={css.table_data}>{item.value}</p>
						</div>

						{/*Відображати якщо є текст підказки*/}
						{type !== 'short' && (
							<ToolTip text={'Example text'}>
								<HelpCircle />
							</ToolTip>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
