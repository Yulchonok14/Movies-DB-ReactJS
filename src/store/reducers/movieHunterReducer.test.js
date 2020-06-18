import movieHunterReducer from './movieHunterReducer'
import * as actionTypes from '../actions/actionTypes';

import { movieItems } from '../../__mocks__/movieItems';

describe('movie hunter reducer', () => {

    it('should return the initial state', () => {
        expect(movieHunterReducer(undefined, {})).toEqual(
            {
                movieHunterItems: [],
                searchFilter: 'title',
                sortFilter: 'release_date'
            }
        )
    });

    it('should handle GET_MOVIES_HUNTER', () => {
        expect(
            movieHunterReducer({sortFilter: 'release_date'}, {
                type: actionTypes.GET_MOVIES_HUNTER,
                payload: { movieItems: movieItems }
            })
        ).toEqual(
            {
                movieHunterItems: movieItems,
                sortFilter: 'release_date'
            }
        )
    });

    it('should handle SEARCH_FILTER', () => {
        expect(
            movieHunterReducer({}, {
                type: actionTypes.SEARCH_FILTER,
                payload: { searchFilterText: 'genres' }
            })
        ).toEqual(
            {
                searchFilter: 'genres'
            }
        )
    });

    it('should handle SORT_FILTER', () => {
        expect(
            movieHunterReducer({}, {
                type: actionTypes.SORT_FILTER,
                payload: { sortFilterText: 'vote_average' }
            })
        ).toEqual(
            {
                sortFilter: 'vote_average'
            }
        )
    });

    it('should handle SORT_MOVIES', () => {
        expect(
            movieHunterReducer({
                sortFilter: 'vote_average',
                movieHunterItems: [movieItems[0], movieItems[1]]
            }, {
                type: actionTypes.SORT_MOVIES
            })
        ).toEqual(
            {
                movieHunterItems: [movieItems[1], movieItems[0]],
                sortFilter: 'vote_average'
            }
        )
    });
});