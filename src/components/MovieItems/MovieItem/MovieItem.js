import React from 'react';

import classes from './MovieItem.css';

const movieItem = (props) => (
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

export default movieItem;