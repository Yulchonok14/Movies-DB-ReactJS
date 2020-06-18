import React from 'react';
import PropTypes from 'prop-types';

import classes from './MoviePanel.css';
import ImageNotFound from '../../assets/images/image_not_found.png';

const MoviePanel = (props) => (
    <div className={classes.MoviePanel}>
        <img src={props.selectedMovie.poster_path}  onError={(e)=>{e.target.onerror = null; e.target.src=ImageNotFound}} alt="Selected movie poster."/>
        <div className={classes.Details}>
            <div>
                <span className={classes.Title}>{props.selectedMovie.title}</span>
                <span className={classes.Rating}>{props.selectedMovie.vote_average}</span>
            </div>
            <div>
                <span className={classes.Date}>{props.selectedMovie.release_date.slice(0, 4)}</span><label>year</label>
                {props.selectedMovie.runtime
                    ? <React.Fragment>
                        <span className={classes.Duration}>{props.selectedMovie.runtime}</span><label>min</label>
                      </React.Fragment>
                    : null}
            </div>
            <p className={classes.Description}>{props.selectedMovie.overview}</p>
        </div>
    </div>
);

MoviePanel.propTypes = {
    selectedMovie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.any
    })
};

export default MoviePanel;