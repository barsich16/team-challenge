import React from "react";
import styles from "../General/General.module.scss";
import {Overview} from "../General/Overview";
import {SpecificationsMain} from "../../Specifications/SpecificationsMain";
import {specifications} from "../../../data/items";
import {Feedback} from "../Feedback/Feedback";
import {CardRow} from "../../CardRow/CardRow";
import {SpecificationsFull} from "../../Specifications/SpecificationsFull";

export const Specifications = React.memo(({changeTab}) => {
    console.log('Specifications');
    return (
        <div>
            <SpecificationsFull specifications={specifications}/>
            <h1 className={styles.title}>
                Apple iPhone 14 Pro Max 512GB Deep Purple (MQ9X3)
            </h1>

        </div>
    );
});