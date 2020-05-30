import React, { useRef } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Search.css';

const search = (props) => {
    const inputRef = useRef(null);
    return (
        <div className={classes.Search}>
            <input ref={inputRef} placeholder="search"/>
            <button onClick={() => props.clicked(inputRef.current.value.toLowerCase())}>search</button>
        </div>
    )
};

export default search;