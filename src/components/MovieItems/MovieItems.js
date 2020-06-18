import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';
import classes from './MovieItems.css';

const MovieItems = (props) => {
    return (
        <div className={classes.MovieItems}>{props.movieItems.length > 0
            ?
            props.movieItems
                .map(item => <MovieItem
                    key={item.id}
                    imgUrl={item.poster_path}
                    title={item.title}
                    date={item.release_date.slice(0, 4)}
                    genre={item.genres.join(', ')}
                    clicked={() => props.chosenItem(item)}
                />)
            : <div className={classes.NoFilms}>No films found</div>
        }</div>
    )
};

MovieItems.propTypes = {
    movieItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        runtime: PropTypes.number
    })),
    chosenItem: PropTypes.func.isRequired
};

export default MovieItems;