import React from 'react';

import Search from '../UI/Search/Search';
import Filter from '../UI/Filter/Filter';
import classes from './SearchPanel.css';

const searchPanel = (props) => (
    <div className={classes.SearchPanel}>
        <span>find your movie</span>
        <Search
            clicked={props.searchBtn}
        />
        <Filter
            clicked={props.switchSearchFilter}
            show={props.showSearch}
            label={props.label}
            buttons={props.searchByFilter}
        />
    </div>
);

export default searchPanel;