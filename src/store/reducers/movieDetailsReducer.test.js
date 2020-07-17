import movieDetailsReducer from './movieDetailsReducer'
import * as actionTypes from '../actions/actionTypes';

import { movieItems } from '../../__mocks__/movieItems';

describe('movie details reducer', () => {
    const choseMovieItemInitial = null;
    const chosenMovieItem = {
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
    };

    it('should return the initial state', () => {
        expect(movieDetailsReducer(undefined, {})).toEqual(
            {
                movieDetailsItems: [],
                chosenMovieItem: choseMovieItemInitial
            }
        )
    });

    it('should handle GET_MOVIES_DETAILS', () => {
        expect(
            movieDetailsReducer({chosenMovieItem: chosenMovieItem}, {
                type: actionTypes.GET_MOVIES_DETAILS,
                payload: { movieItems: movieItems }
            })
        ).toEqual(
            {
                movieDetailsItems: movieItems,
                chosenMovieItem: chosenMovieItem
            }
        )
    });

    it('should handle CHOOSE_MOVIE_DETAILS', () => {
        expect(
            movieDetailsReducer({movieDetailsItems: movieItems}, {
                type: actionTypes.CHOOSE_MOVIE_DETAILS,
                payload: { movieItem: movieItems[0] }
            })
        ).toEqual(
            {
                movieDetailsItems: movieItems,
                chosenMovieItem: movieItems[0]
            }
        )
    });

    it('should handle PASS_CHOSEN_MOVIE', () => {
        expect(
            movieDetailsReducer({}, {
                type: actionTypes.PASS_CHOSEN_MOVIE,
                payload: { chosenMovie: movieItems[0] }
            })
        ).toEqual(
            {
                chosenMovieItem: movieItems[0]
            }
        )
    });
});