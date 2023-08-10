import css from './Specifications.module.scss';

export const SpecificationsMain = ({ data, type }) => {
	return (
		<div className={type === 'short' ? css.tableShort : css.table}>
			<h2 className={type === 'short' ? css.table_titleShort : css.table_title}>
				Main specifications
			</h2>
			<ul className={css.table_wrapper}>
				{data.map((item) => (
					<li>
						<p
							className={
								type === 'short' ? css.table_featureShort : css.table_feature
							}
						>
							{item.name}
						</p>
						<p className={css.table_data}>{item.value}</p>
					</li>
				))}

				{/* <li>
					<p
						className={
							type === 'short' ? css.table_featureShort : css.table_feature
						}
					>
						Series
					</p>
					<p className={css.table_data}>{data.series}</p>
				</li>
				<li>
					<p className={css.table_feature}>Graduation year</p>
					<p className={css.table_data}>{data.year}</p>
				</li>
				<li>
					<p className={css.table_feature}>Operating system</p>
					<p className={css.table_data}>{data.system} </p>
				</li>

				<li>
					<p className={css.table_feature}>Screen diagonal</p>
					<p className={css.table_data}>{data.diagonal} </p>
				</li>
				<li>
					<p className={css.table_feature}>Processor</p>
					<p className={css.table_data}>{data.processor} </p>
				</li>
				<li>
					<p className={css.table_feature}>Number of cores</p>
					<p className={css.table_data}>{data.numberOfCores} </p>
				</li>
				<li>
					<p className={css.table_feature}>Internal memory</p>
					<p className={css.table_data}>{data.memory} </p>
				</li>
				<li>
					<p className={css.table_feature}>RAM</p>
					<p className={css.table_data}>{data.ram} </p>
				</li>
				<li>
					<p className={css.table_feature}>Main camera</p>
					<p className={css.table_data}>{data.mainCam}</p>
				</li>
				<li>
					<p className={css.table_feature}>Front camera</p>
					<p className={css.table_data}>{data.frontCam}</p>
				</li>
				<li>
					<p className={css.table_feature}>Battery capacity</p>
					<p className={css.table_data}> {data.battery}</p>
				</li> */}
			</ul>
		</div>
	);
};
