import { TabContainer } from '../../components/TabContainer/TabContainer';

export const HomePage = () => {
	return (
		<div>
			<div>Home Pages</div>
			<TabContainer
				items={[
					{
						tab: 'Все про товар',
						title: 'Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
						content:
							'something about Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
					},
					{
						tab: 'Характеристики',
						title:
							'Характеристики Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
						content:
							'something about Характеристики Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
					},
					{
						tab: 'Відгуки',
						title: 'Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
						content:
							'Відгуки про Смартфон Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
					},
					{
						tab: 'Питання',
						title:
							'Питання і відповіді (FAQ) Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
						content:
							'something about Питання і відповіді (FAQ) Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
					},
					{
						tab: 'Аксесуари',
						title:
							'Аксесуари Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
						content:
							'something about Аксесуари Samsung Galaxy A24 6/128Gb Black (SM-A245FZKVSEK)',
					},
				]}
			/>
		</div>
	);
};
