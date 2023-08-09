import css from './Specifications.module.scss';

export const SpecificationsFull = ({ specifications }) => {
	console.log(specifications);
	return (
		<div className={css.table}>
			<div className={css.table_wrapper}>
				<ul>
					{specifications.map((specification) => (
						<li className={css.specification}>
							<p className={css.specification_topic}>{specification.label}</p>
							<ul className={css.list}>
								{specification.data.map((item) => (
									<li className={css.list_item}>
										<p className={css.table_feature}>{item.name}</p>
										<p className={css.table_data}>{item.value}</p>
									</li>
								))}
							</ul>
						</li>
					))}

					{/* <li>
					<p className={css.table_topic}>Main</p>
					<p></p>
				</li>
				<li>
					<p className={css.table_feature}>Series</p>
					<p className={css.table_data}>{specifications.data.value}</p>
				</li>
				<li>
					<p className={css.table_feature}>Graduation year</p>
					<p className={css.table_data}>{specifications.data.year}</p>
				</li>
				<li>
					<p className={css.table_feature}>Color</p>
					<p className={css.table_data}>{specifications.data.color}</p>
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
					<p className={css.table_data}>{specifications.data.system}</p>
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
					<p className={css.table_data}>{specifications.data.memory}</p>
				</li>
				<li>
					<p className={css.table_feature}>RAM</p>
					<p className={css.table_data}>{specifications.data.ram}</p>
				</li>
				<li>
					<p className={css.table_feature}>
						The maximum volume of the supported memory card
					</p>
					<p className={css.table_data}>{specifications.data.volume}</p>
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
					<p className={css.table_data}>{specifications.data.diagonal}</p>
				</li>
				<li>
					<p className={css.table_feature}>Display resolution</p>
					<p className={css.table_data}>{specifications.data.resolution}</p>
				</li>
				<li>
					<p className={css.table_feature}>Matrix type</p>
					<p className={css.table_data}>{specifications.data.matrixType}</p>
				</li>
				<li>
					<p className={css.table_feature}>Screen refresh rate</p>
					<p className={css.table_data}>
						{specifications.data.screenRefreshRate}
					</p>
				</li>
				<li>
					<p className={css.table_feature}>Screen material</p>
					<p className={css.table_data}>{specifications.data.screenMaterial}</p>
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
					<p className={css.table_data}>{specifications.data.processor}</p>
				</li>
				<li>
					<p className={css.table_feature}>Number of cores</p>
					<p className={css.table_data}>{specifications.data.numberOfCores}</p>
				</li>
				<li>
					<p className={css.table_feature}>Apple Series</p>
					<p className={css.table_data}>{specifications.data.appleSeries}</p>
				</li> */}
				</ul>
			</div>
		</div>
	);
};
