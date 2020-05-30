import React from 'react';

import classes from './MoviePanel.css';

const moviePanel = (props) => (
    <div className={classes.MoviePanel}>
        <img src={props.selectedMovie.imageUrl} alt="Selected movie poster."/>
        <div className={classes.Details}>
            <div>
                <span className={classes.Title}>{props.selectedMovie.title}</span>
                <span className={classes.Rating}>{props.selectedMovie.rating}</span>
            </div>
            <div>
                <span className={classes.Date}>{props.selectedMovie.date}</span><label>year</label>
                <span className={classes.Duration}>{props.selectedMovie.duration}</span><label>min</label>
            </div>
            <p className={classes.Description}>{props.selectedMovie.description}</p>
        </div>
    </div>
);

export default moviePanel;