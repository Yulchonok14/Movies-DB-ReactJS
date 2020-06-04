import React from 'react';
import PropTypes from 'prop-types';

import classes from './MovieItem.css';

const MovieItem = (props) => (
    <div onClick={props.clicked} className={classes.MovieItem}>
        <img src={props.imgUrl}/>
        <div className={classes.Description}>
            <div>
                <span>{props.title}</span>
                <span className={classes.Genre}>{props.genre}</span>
            </div>
            <span className={classes.Date}>{props.date}</span>
        </div>
    </div>
);

MovieItem.propTypes = {
    clicked: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default MovieItem;