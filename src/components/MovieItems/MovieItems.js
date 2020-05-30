import React from 'react';

import MovieItem from './MovieItem/MovieItem';
import classes from './MovieItems.css';

const movieItems = (props) => {
    let movies = props.movieItems
        .map((item, index) => <MovieItem
            key={item.id}
            imgUrl={item.imageUrl}
            title={item.title}
            date={item.date}
            genre={item.genre}
            clicked={() => props.chosenItem(index)}
        />);
    if(!movies.length) {
        movies = <div className={classes.NoFilms}>No films found</div>
    }
    return (
        <div className={classes.MovieItems}>{movies}</div>
    )
};

export default movieItems;