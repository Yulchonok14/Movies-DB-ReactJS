import * as actionTypes from './../actions/actionTypes';
import { sortFunc } from '../utils/storeUtils';

const initialState = {
    movieHunterItems: [],
    searchFilter: 'title',
    sortFilter: 'release_date'
};

const movieHunterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_HUNTER:
            return {
                ...state,
                movieHunterItems: action.payload.movieItems
                    .sort((a, b) => sortFunc(a, b, state.sortFilter))
            };
        case actionTypes.SEARCH_FILTER:
            return {
                ...state,
                searchFilter: action.payload.searchFilterText
            };
        case actionTypes.SORT_FILTER:
            return {
                ...state,
                sortFilter: action.payload.sortFilterText
            };
        case actionTypes.SORT_MOVIES:
            return {
                ...state,
                movieHunterItems: [...state.movieHunterItems]
                    .sort((a, b) => sortFunc(a, b, state.sortFilter))
            };
        default:
            return state
    }
};

export default movieHunterReducer;