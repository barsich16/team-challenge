import { useFilterQuery } from '../../hooks/useFilterQuery';
import { SpecificationsFull } from '../../components/Specifications/SpecificationsFull';
import { SpecificationsMain } from '../../components/Specifications/SpecificationsMain';
import { Button } from '../../components/UI/Button/Button';
import css from './HomePage.module.css';
import { ReactComponent as ReadMore } from '../../assets/icons/readMore.svg';
import { useState } from 'react';
import { PresentationsIphone } from '../../components/Presentations/PresentationsIphone';

export const HomePage = () => {
	//test
	const { filter, changeFilter } = useFilterQuery();
	console.log(filter);

	const [fullMode, setFullMode] = useState(false);

	return (
		<div>
			Home Page
			<PresentationsIphone />
			{fullMode ? (
				<SpecificationsFull specifications={specifications} />
			) : (
				<>
					<SpecificationsMain data={data} />
					<SpecificationsMain data={data} type={'short'} />
				</>
			)}
			<Button
				variant='outlained'
				textSize='middle'
				onClick={() => {
					setFullMode(!fullMode);
				}}
				className={css.buttonReadAll}
				icon={<ReadMore fill='var(--bright-purple)' />}
			>
				Read All
			</Button>
			{/*<input type='text' onChange={changeFilter('name')} />*/}
			{/*<input type='text' onChange={changeFilter('surname')} />*/}
		</div>
	);
};

// const data = {
// 	system: 'iOS 16',
// 	series: 'iPhone 14 Pro',
// 	year: '2022',
// 	diagonal: '6,7"',
// 	processor: 'Apple A16 Bionic',
// 	numberOfCores: 6,
// 	memory: '512 GB',
// 	ram: '6 GB',
// 	mainCam: '48 MP, 12 MP, 12 MP',
// 	frontCam: '12 MP',
// 	battery: '3200 MAg',
// 	color: 'Deep Purple',
// 	volume: 'None',
// 	resolution: '2796x1290',
// 	matrixType: 'OLED (Super Retina XDR)',
// 	screenRefreshRate: '120 Hz',
// 	screenMaterial: 'Ceramic Shield',
// 	appleSeries: 'Apple Ax Series',
// };

const data = [
	{
		name: 'Series',
		value: 'Iphone 14 Pro',
	},
	{
		name: 'Graduation Year',
		value: 2022,
	},
	{
		name: 'Operating system',
		value: 'iOS 16',
	},
	{
		name: 'Screen diagonal',
		value: '6,7"',
	},
	{
		name: 'Processor',
		value: 'Apple A16 Bionic',
	},
	{
		name: 'Number of cores',
		value: '6',
	},
	{
		name: 'Internal memory',
		value: '512 GB',
	},
	{
		name: 'RAM',
		value: '6 GB',
	},
	{
		name: 'Main camera',
		value: '48 MP, 12 MP, 12 MP',
	},
	{
		name: 'Front camera',
		value: '12 MP',
	},
	{
		name: 'Battery capacity',
		value: '3200 MAg',
	},
];

export const specifications = [
	{
		label: 'Main',
		data: [
			{
				name: 'Series',
				value: 'Iphone 14 Pro',
			},
			{
				name: 'Graduation Year',
				value: 2022,
			},
			{
				name: 'Color',
				value: 'Deep Purple',
			},
		],
	},
	{
		label: 'Memory',
		data: [
			{
				name: 'Internal Memory',
				value: '512 GB',
			},
			{
				name: 'RAM',
				value: '6 GB',
			},
		],
	},
];

const photos = [
	{
		title: 'image / iphone 14 pro svg text',
		url: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?w=640',
		details: 'aaaaaaaaaaaaaaa',
	},
	{
		title: 'image / iphone 15 pro svg text',
		url: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg',
		details: 'bbbbbbbbbbbbbbbbbbbbb',
	},
	{
		title: 'image / iphone 16 pro svg text',
		url: '../../assets/photo/back-frontfullphone.jpg',
		details: 'cccccccccccccccccccccc',
	},
];
