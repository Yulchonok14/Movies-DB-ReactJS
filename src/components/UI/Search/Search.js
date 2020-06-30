import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import classes from './Search.css';

const Search = (props) => {
    const inputRef = useRef(null);
    return (
        <div className={classes.Search}>
            <input ref={inputRef} placeholder="search" defaultValue={props.searchText}/>
            <button onClick={() => props.clicked(inputRef.current.value.toLowerCase())}>search</button>
        </div>
    )
};

Search.propTypes = {
    clicked: PropTypes.func.isRequired
};

export default Search;