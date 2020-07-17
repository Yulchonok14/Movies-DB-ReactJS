import * as actionTypes from './actionTypes';
import { getQueryString } from '../utils/storeUtils';

export const searchMovieHunter = (searchText, searchBy) => {
    if(searchText) {
        let url = 'https://reactjs-cdp.herokuapp.com/movies';
        const params = {
            search: searchText,
            searchBy: searchBy
        };
        url += '?' + getQueryString(params);
        return dispatch => {
            return fetch(url)
                .then(response => response.json())
                .then(movieItems => {
                    dispatch(getHunterMovies(movieItems.data, searchText))
                })
        }
    } else {
        return dispatch => dispatch(getHunterMovies([], null));
    }
};

export const getHunterMovies = (movieItems, searchText) => {
    return {
        type: actionTypes.GET_MOVIES_HUNTER,
        payload: {
            movieItems: movieItems,
            searchText: searchText
        }
    }
};

export const searchFilter = (searchFilterText) => {
    return {
        type: actionTypes.SEARCH_FILTER,
        payload: {searchFilterText: searchFilterText}
    }
};

export const sortFilter = (sortFilterText) => {
    return {
        type: actionTypes.SORT_FILTER,
        payload: {sortFilterText: sortFilterText}
    }
};

export const sortMovies = () => {
    return {
        type: actionTypes.SORT_MOVIES
    }
};