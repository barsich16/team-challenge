import React, {useEffect, useState} from 'react';
import {TabContent} from '../TabContent/TabContent';
import css from './TabContainer.module.scss';
import cs from "classnames";
import {General} from "../Product/General/General";
import styles from "../UI/Tooltip/ToolTip.module.scss";
import {CSSTransition} from "react-transition-group";

export const Tabs = () => {
    const items = [
        {tabName: 'General', content: <General/>},
        {tabName: 'Specifications', content: <div>Specifications</div>},
        {tabName: 'Reviews & Questions (324)', content: <div>Reviews & Questions</div>},
        {tabName: 'Accessories', content: <div>Accessories</div>},
        {tabName: 'Availability', content: <div>Availability</div>}
    ]
    const [active, setActive] = useState(0);
    console.log(active);

    const openTab = (e) => {
        console.log(e.target);
        setActive(+e.target.dataset.index);
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
            {items.map((tab, index) => {
                return <TabWrapper
                    key={index}
                    content={tab.content}
                    isActive={index === active}
                />
            })}

            {/*{items[active] && <TabWrapper content={items[active].content}/>}*/}
        </div>
    );
};

const transitionClasses = {
    enter: css.enter,
    enterActive: css.enterActive,
    exit: css.exit,
    exitActive: css.exitActive,
};

const TabWrapper = ({content, isActive}) => {

    const [isShow, setIsShow] = useState(false);
    console.log(isActive);

    return <CSSTransition in={isActive} timeout={400} classNames={transitionClasses} unmountOnExit>
        {content}
    </CSSTransition>
}
