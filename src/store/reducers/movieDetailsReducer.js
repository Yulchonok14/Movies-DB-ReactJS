import * as actionTypes from './../actions/actionTypes';
import { sortFunc } from '../utils/storeUtils';

const initialState = {
    movieDetailsItems: [],
    chosenMovieItem: {
        budget: 0,
        genres: ["Action", "Adventure", "Science Fiction"],
        id: 447365,
        overview: "The third film based on Marvel's Guardians of the Galaxy.",
        poster_path: "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        release_date: "2020-05-01",
        revenue: 0,
        runtime: null,
        tagline: "",
        title: "Guardians of the Galaxy Vol. 3",
        vote_average: 0,
        vote_count: 9
    }
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
            const chosenMovieDetails = [...state.movieDetailsItems].find(movie => movie.id === action.payload.id);
            return {
                ...state,
                chosenMovieItem: chosenMovieDetails
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