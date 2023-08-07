import css from './Specifications.module.css';

export const SpecificationsFull = ({ data }) => {
	return (
		<div>
			<div className={css.table}>
				<h2 className={css.title}>Specifications</h2>
				<div className={css.wrapper}>
					<tr>
						<td className={css.topic}>Main</td>
						<td></td>
					</tr>
					<tr>
						<td>Series</td>
						<td>{data.series}</td>
					</tr>
					<tr>
						<td>Graduation year</td>
						<td>{data.year}</td>
					</tr>
					<tr>
						<td>Color</td>
						<td>{data.color}</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td className={css.topic}>Operating system</td>
						<td></td>
					</tr>
					<tr>
						<td>Operating system</td>
						<td>{data.system}</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td className={css.topic}>Memory</td>
						<td></td>
					</tr>
					<tr>
						<td>Internal memory</td>
						<td>{data.memory}</td>
					</tr>
					<tr>
						<td>RAM</td>
						<td>{data.ram}</td>
					</tr>
					<tr>
						<td>The maximum volume of the supported memory card</td>
						<td>{data.volume}</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className={css.topic}>Display</td>
						<td></td>
					</tr>
					<tr>
						<td>Screen diagonal</td>
						<td>{data.diagonal}</td>
					</tr>
					<tr>
						<td>Display resolution</td>
						<td>{data.resolution}</td>
					</tr>
					<tr>
						<td>Matrix type</td>
						<td>{data.matrixType}</td>
					</tr>
					<tr>
						<td>Screen refresh rate</td>
						<td>{data.screenRefreshRate}</td>
					</tr>
					<tr>
						<td>Screen material</td>
						<td>{data.screenMaterial}</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className={css.topic}>Processor</td>
						<td></td>
					</tr>
					<tr>
						<td>Processor</td>
						<td>{data.processor}</td>
					</tr>
					<tr>
						<td>Number of cores</td>
						<td>{data.numberOfCores}</td>
					</tr>
					<tr>
						<td>Apple Series</td>
						<td>{data.appleSeries}</td>
					</tr>
				</div>
			</div>
		</div>
	);
};
