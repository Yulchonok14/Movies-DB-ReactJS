import React from 'react';
import PropTypes from 'prop-types';

import Search from '../UI/Search/Search';
import Filter from '../UI/Filter/Filter';
import classes from './SearchPanel.css';

const SearchPanel = (props) => (
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

SearchPanel.propTypes = {
    searchBtn: PropTypes.func.isRequired,
    switchSearchFilter: PropTypes.func.isRequired,
    showSearch: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired
        ]),
    label: PropTypes.string.isRequired,
    searchByFilter: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired
    }))
};

export default SearchPanel;