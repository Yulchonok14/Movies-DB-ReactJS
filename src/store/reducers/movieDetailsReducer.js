import * as actionTypes from './../actions/actionTypes';
import { sortFunc } from '../utils/storeUtils';

const initialState = {
    movieDetailsItems: [],
    chosenMovieItem: null
};

const movieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_DETAILS:
            return {
                ...state,
                movieDetailsItems: action.payload.movieItems
                    .filter(item => item.id !== state.chosenMovieItem.id)
            };
        case actionTypes.CHOOSE_MOVIE_DETAILS:
            return {
                ...state,
                chosenMovieItem: action.payload.movieItem
            };
        case actionTypes.PASS_CHOSEN_MOVIE:
            return {
                ...state,
                chosenMovieItem: action.payload.chosenMovie
            };
        default:
            return state
    }
};

export default movieDetailsReducer;