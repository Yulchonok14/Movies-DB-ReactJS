import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionCreators from './index';
import * as actionTypes from './actionTypes';
import { movieItems } from '../../__mocks__/movieItems';

const mockStore = configureMockStore([thunk]);

describe("searchMovieHunter Action", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            movieItems: []
        });
    });

    it('', async() => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: movieItems })}));
        await store.dispatch(actionCreators.searchMovieHunter('text', 'title'));
        const actions = store.getActions();
        const expectedRes = {
            type: actionTypes.GET_MOVIES_HUNTER,
            payload: {
                movieItems: movieItems,
                searchText: 'text'
            }
        };

        expect(actions[0]).toEqual(expectedRes);
    })
});

describe('movieHunterActions', () => {

    it('getHunterMovies', () => {
        const actualRes = actionCreators.getHunterMovies(movieItems, 'text');
        const expectedRes = {
            type: actionTypes.GET_MOVIES_HUNTER,
            payload: {
                movieItems: movieItems,
                searchText: 'text'
            }
        };
        expect(actualRes).toEqual(expectedRes);
    });

    it('searchFilter', () => {
        const actualRes = actionCreators.searchFilter('title');
        const expectedRes = {
            type: actionTypes.SEARCH_FILTER,
            payload: {searchFilterText: 'title'}
        };
        expect(actualRes).toEqual(expectedRes);
    });

    it('sortFilter', () => {
        const actualRes = actionCreators.sortFilter('date_release');
        const expectedRes = {
            type: actionTypes.SORT_FILTER,
            payload: {sortFilterText: 'date_release'}
        };
        expect(actualRes).toEqual(expectedRes);
    });

    it('sortMovies', () => {
        const actualRes = actionCreators.sortMovies();
        const expectedRes = {
            type: actionTypes.SORT_MOVIES
        };
        expect(actualRes).toEqual(expectedRes);
    });
});