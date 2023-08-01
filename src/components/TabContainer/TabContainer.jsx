import React, {useState} from 'react';
import {TabContent} from '../TabContent/TabContent';
import css from './TabContainer.module.scss';
import cs from "classnames";

export const Tabs = () => {
    const items = [
        {tabName: 'General', content: <div>General</div>},
        {tabName: 'Specifications', content: <div>Specifications</div>},
        {tabName: 'Reviews & Questions (324)', content: <div>Reviews & Questions</div>},
        {tabName: 'Accessories', content: <div>Accessories</div>},
        {tabName: 'Availability', content: <div>Availability</div>}
    ]
    const [active, setActive] = useState(0);

    const openTab = (e) => {
        console.log(e.target);
        setActive(e.target.dataset.index);
    };

    return (
        <div>
            <div className={css.container}>
                {items.map((item, i) => (
                    <button
                        className={cs(css.btn, {[css.active]: i === Number(active)})}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                    >
                        {item.tabName}
                    </button>
                ))}
            </div>
            {items[active] && items[active].content}
        </div>
    );
};
