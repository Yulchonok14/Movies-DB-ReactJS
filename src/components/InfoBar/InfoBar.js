import React from 'react';

import Filter from '../UI/Filter/Filter';
import classes from './InfoBar.css';

const infoBar = (props) => (
    <div className={classes.InfoBar}>
        <span>{props.resultText}</span>
        <Filter
            clicked={props.switchSearchFilter}
            show={props.showFilter}
            label={props.label}
            buttons={props.sortByFilter}/>
    </div>
);

export default infoBar;