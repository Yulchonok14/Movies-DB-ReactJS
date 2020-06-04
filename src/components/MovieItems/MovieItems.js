import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';
import classes from './MovieItems.css';

const MovieItems = (props) => {
    return (
        <div className={classes.MovieItems}>{props.movieItems.length > 0
            ?
            props.movieItems
                .map((item, index) => <MovieItem
                    key={item.id}
                    imgUrl={item.imageUrl}
                    title={item.title}
                    date={item.date}
                    genre={item.genre}
                    clicked={() => props.chosenItem(index)}
                />)
            : <div className={classes.NoFilms}>No films found</div>
        }</div>
    )
};

MovieItems.propTypes = {
    movieItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired
    })),
    chosenItem: PropTypes.func.isRequired
};

export default MovieItems;