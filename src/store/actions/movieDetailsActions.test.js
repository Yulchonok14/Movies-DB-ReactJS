import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionCreators from './index';
import * as actionTypes from './actionTypes';
import { movieItems } from '../../__mocks__/movieItems';

const mockStore = configureMockStore([thunk]);

describe("searchMovieDetails", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            movieItems: []
        });
    });

    it('should dispatch GET_MOVIES_DETAILS action', async() => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: movieItems })}));
        await store.dispatch(actionCreators.searchMovieDetails('text'));
        const actions = store.getActions();
        const expectedRes = {
            type: actionTypes.GET_MOVIES_DETAILS,
            payload: {
                movieItems: movieItems
            }
        };

        expect(actions[0]).toEqual(expectedRes);
    })
});

describe('movieDetailsActions', () => {

    it('getDetailsMovies', () => {
        const actualRes = actionCreators.getDetailsMovies(movieItems);
        const expectedRes = {
            type: actionTypes.GET_MOVIES_DETAILS,
            payload: {
                movieItems: movieItems
            }
        };
        expect(actualRes).toEqual(expectedRes);
    });

    it('chooseMovieDetails', () => {
        const actualRes = actionCreators.chooseMovieDetails(111);
        const expectedRes = {
            type: actionTypes.CHOOSE_MOVIE_DETAILS,
            payload: {id: 111}
        };
        expect(actualRes).toEqual(expectedRes);
    });

    it('passChosenMovie', () => {
        const actualRes = actionCreators.passChosenMovie(movieItems[0]);
        const expectedRes = {
            type: actionTypes.PASS_CHOSEN_MOVIE,
            payload: {chosenMovie: movieItems[0]}
        };
        expect(actualRes).toEqual(expectedRes);
    });
});