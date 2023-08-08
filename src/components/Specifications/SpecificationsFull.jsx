import css from './Specifications.module.scss';

export const SpecificationsFull = ({ data }) => {
	return (
		<div className={css.table}>
			<ul className={css.table_wrapper}>
				<li>
					<p className={css.table_topic}>Main</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Series</p>
					<p className={css.table_data}>{data.series}</p>
				</li>
				<li>
					<p className={css.table_feature}>Graduation year</p>
					<p className={css.table_data}>{data.year}</p>
				</li>
				<li>
					<p className={css.table_feature}>Color</p>
					<p className={css.table_data}>{data.color}</p>
				</li>
				<li>
					<p></p>
					<p></p>
				</li>

				<li>
					<p className={css.table_topic}>Operating system</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Operating system</p>
					<p className={css.table_data}>{data.system}</p>
				</li>
				<li>
					<p></p>
					<p></p>
				</li>

				<li>
					<p className={css.table_topic}>Memory</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Internal memory</p>
					<p className={css.table_data}>{data.memory}</p>
				</li>
				<li>
					<p className={css.table_feature}>RAM</p>
					<p className={css.table_data}>{data.ram}</p>
				</li>
				<li>
					<p className={css.table_feature}>
						The maximum volume of the supported memory card
					</p>
					<p className={css.table_data}>{data.volume}</p>
				</li>
				<li>
					<p></p>
					<p></p>
				</li>
				<li>
					<p className={css.table_topic}>Display</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Screen diagonal</p>
					<p className={css.table_data}>{data.diagonal}</p>
				</li>
				<li>
					<p className={css.table_feature}>Display resolution</p>
					<p className={css.table_data}>{data.resolution}</p>
				</li>
				<li>
					<p className={css.table_feature}>Matrix type</p>
					<p className={css.table_data}>{data.matrixType}</p>
				</li>
				<li>
					<p className={css.table_feature}>Screen refresh rate</p>
					<p className={css.table_data}>{data.screenRefreshRate}</p>
				</li>
				<li>
					<p className={css.table_feature}>Screen material</p>
					<p className={css.table_data}>{data.screenMaterial}</p>
				</li>
				<li>
					<p></p>
					<p></p>
				</li>
				<li>
					<p className={css.table_topic}>Processor</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Processor</p>
					<p className={css.table_data}>{data.processor}</p>
				</li>
				<li>
					<p className={css.table_feature}>Number of cores</p>
					<p className={css.table_data}>{data.numberOfCores}</p>
				</li>
				<li>
					<p className={css.table_feature}>Apple Series</p>
					<p className={css.table_data}>{data.appleSeries}</p>
				</li>
			</ul>
		</div>
	);
};
