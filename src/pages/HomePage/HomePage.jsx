import {useFilterQuery} from '../../hooks/useFilterQuery';

export const HomePage = () => {
    //test
    const {filter, changeFilter} = useFilterQuery();
    console.log(filter);

    return (
        <div>
            HomePage
            {/*<input type='text' onChange={changeFilter('name')} />*/}
            {/*<input type='text' onChange={changeFilter('surname')} />*/}
        </div>
    );
};

