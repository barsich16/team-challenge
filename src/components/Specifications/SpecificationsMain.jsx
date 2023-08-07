import css from './Specifications.module.css';

export const SpecificationsMain = ({ data }) => {
	const changeListOfSpecifications = () => {
		console.log('ddddddddddddddddd');
	};
	return (
		<div>
			<div className={css.table}>
				<h2 className={css.title}>Main specifications</h2>
				<div className={css.wrapper}>
					<tr>
						<td>Series</td>
						<td>{data.series}</td>
					</tr>
					<tr>
						<td>Graduation year</td>
						<td>{data.year}</td>
					</tr>
					<tr>
						<td>Operating system</td>
						<td>{data.system} </td>
					</tr>

					<tr>
						<td>Screen diagonal</td>
						<td>{data.diagonal} </td>
					</tr>
					<tr>
						<td>Processor</td>
						<td>{data.processor} </td>
					</tr>
					<tr>
						<td>Number of cores</td>
						<td>{data.numberOfCores} </td>
					</tr>
					<tr>
						<td>Internal memory</td>
						<td>{data.memory} </td>
					</tr>
					<tr>
						<td>RAM</td>
						<td>{data.ram} </td>
					</tr>
					<tr>
						<td>Main camera</td>
						<td>{data.mainCam}</td>
					</tr>
					<tr>
						<td>Front camera</td>
						<td>{data.frontCam}</td>
					</tr>
					<tr>
						<td className={css.lastChild}>Battery capacity</td>
						<td className={css.lastChild}> {data.battery}</td>
					</tr>
				</div>
			</div>
		</div>
	);
};
