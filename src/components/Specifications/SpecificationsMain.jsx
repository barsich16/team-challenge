import css from './Specifications.module.scss';

export const SpecificationsMain = ({data, type}) => {
    return (
        <div className={type === 'short' ? css.tableShort : css.table}>
            <h2 className={type === 'short' ? css.table_titleShort : css.table_title}>
                Main specifications
            </h2>
            <ul className={css.table_wrapper}>
                {data.map((item) => (
                    <li className={css.main_li}>
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
            </ul>
        </div>
    );
};
