import React from 'react';

import classes from './Filter.css';

const filter = (props) => {
    const filterBtns = props.buttons ?
        props.buttons.map((btn, index) =>
            <button
                className={btn.isActive ? classes.Active: null}
                key={btn.id}
                onClick={()=>props.clicked(index)}>
                {btn.text}
            </button>) : null;
    return (
        <div style={{display: props.show === 'true' ? 'flex' : 'none'}}
             className={classes.Filter}>
            <label>{props.label}</label>
            <div>{filterBtns}</div>
        </div>
    )
};

export default filter;