import * as actionTypes from './actionTypes';
import { getQueryString } from '../utils/storeUtils';

export const searchMovieDetails = (searchText) => {
    let url = 'https://reactjs-cdp.herokuapp.com/movies';
    const params = {
        search: searchText,
        searchBy: 'genres'
    };
    url += '?' + getQueryString(params);
    return dispatch => {
        return fetch(url)
            .then(response => response.json())
            .then(movieItems => {
                dispatch(getDetailsMovies(movieItems.data))
            } )
    }
};

export const getDetailsMovies = (movieItems) => {
    return {
        type: actionTypes.GET_MOVIES_DETAILS,
        payload: {
            movieItems: movieItems
        }
    }
};

export const chooseMovieDetails = (id) => {
    return {
        type: actionTypes.CHOOSE_MOVIE_DETAILS,
        payload: {id: id}
    }
};

export const passChosenMovie = (movie) => {
    return {
        type: actionTypes.PASS_CHOSEN_MOVIE,
        payload: {chosenMovie: movie}
    }
};