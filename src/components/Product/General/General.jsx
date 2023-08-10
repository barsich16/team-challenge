import styles from './General.module.scss';
import cs from 'classnames';
import {CardItem} from '../../CardItem/CardItem';
import {CardRow} from '../../CardRow/CardRow';
import {ColorCircles} from '../../UI/ColorCircles/ColorCircles';
import {Button} from '../../UI/Button/Button';
import {ToolTip} from '../../UI/Tooltip/Tooltip';
import {Icon} from '../../UI/Icon/Icon';
import {ReactComponent as Cart} from '../../../assets/icons/cart.svg';
import {ReactComponent as Credit} from '../../../assets/icons/credit.svg';
import src from '../../../assets/icons/mono.png';
import {useState} from 'react';
import {TestSlider} from "../Sliders/TestSlider/TestSlider";
import {mainProductInfo} from '../../../data/items'
import {Overview} from "./Overview";
import {Feedback} from "./Feedback";

export const General = () => {

    return (
        <>
            <Overview/>
            {/*<PresentationIphone />*/}
            {/*<MainSpecifications />*/}
            <Feedback/>
            {/*    Recomendations*/}
            {/*    Recently viewed*/}
        </>

    );
};
