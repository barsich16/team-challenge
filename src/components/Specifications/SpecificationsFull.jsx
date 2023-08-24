import css from './Specifications.module.scss';
import {ToolTip} from '../UI/Tooltip/Tooltip';
import {ReactComponent as HelpCircle} from '../../assets/icons/help-circle.svg';
//ToDo: переписати компонент повністю
export const SpecificationsFull = ({specifications}) => {
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
                                        <div className={css.list_item_info}>
                                            <p className={css.table_feature}>{item.name}</p>
                                            <p className={css.table_data}>{item.value}</p>
                                        </div>

                                        {/*Відображати якщо є текст підказки*/}
                                        <ToolTip text={'Example text'}>
                                            <HelpCircle/>
                                        </ToolTip>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
