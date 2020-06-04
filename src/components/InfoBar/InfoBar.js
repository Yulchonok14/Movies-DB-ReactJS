import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../UI/Filter/Filter';
import classes from './InfoBar.css';

const InfoBar = (props) => (
    <div className={classes.InfoBar}>
        <span>{props.resultText}</span>
        <Filter
            clicked={props.switchSearchFilter}
            show={props.showFilter}
            label={props.label}
            buttons={props.sortByFilter}/>
    </div>
);

InfoBar.propTypes = {
    resultText: PropTypes.string.isRequired,
    switchSearchFilter: PropTypes.func,
    showFilter: PropTypes.bool,
    label: PropTypes.string,
    sortByFilter: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        text:PropTypes.string,
        isActive: PropTypes.bool
    }))
};

export default InfoBar;