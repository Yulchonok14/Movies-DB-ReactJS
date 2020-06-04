import React from 'react';
import PropTypes from 'prop-types';

import classes from './Filter.css';

const Filter = (props) => {
    const filterBtns = props.buttons
        ?
        props.buttons.map((btn, index) =>
            <button
                className={btn.isActive ? classes.Active: null}
                key={btn.id}
                onClick={()=>props.clicked(index)}>
                {btn.text}
            </button>)
        : null;
    return (
        <div style={{display: props.show ? 'flex' : 'none'}}
             className={classes.Filter}>
            <label>{props.label}</label>
            <div>{filterBtns}</div>
        </div>
    )
};

Filter.propTypes = {
    clicked: PropTypes.func,
    label: PropTypes.string,
    show: PropTypes.bool,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired
    }))
};

export default Filter;