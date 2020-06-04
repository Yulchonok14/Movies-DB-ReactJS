import React from 'react';
import PropTypes from 'prop-types';

import classes from './MoviePanel.css';

const MoviePanel = (props) => (
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

MoviePanel.propTypes = {
    selectedMovie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired
    })
};

export default MoviePanel;