import React from 'react';

import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';


import ConnectedMovieHunter, { MovieHunter, mapDispatchToProps } from './MovieHunter';
import * as actionCreators from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import { movieItems } from '../../__mocks__/movieItems';
import { sortByButtonsArr } from '../../__mocks__/sortButtons';
import { searchByButtonsArr } from '../../__mocks__/searchButtons';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Search from '../../components/UI/Search/Search';

configure({
    adapter: new Adapter()
});

describe('<MovieHunter/>', () => {
    const initialState = {
        hunter: {
            movieHunterItems: [],
            searchFilter: 'title',
            sortFilter: 'release_date'
        },
        searchFilterArr: searchByButtonsArr,
        sortFilterArr: sortByButtonsArr
    };
    const mockStore = configureStore([thunk]);
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<ConnectedMovieHunter store={store}/>);
    });

    it('render the connected component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('check Prop matches with initialState', () => {
        expect(wrapper.find(MovieHunter).prop('movieItems')).toEqual(initialState.hunter.movieHunterItems);
        expect(wrapper.find(MovieHunter).prop('sortFilter')).toEqual(initialState.hunter.sortFilter);
        expect(wrapper.find(MovieHunter).prop('searchFilter')).toEqual(initialState.hunter.searchFilter);
    });

    it('test mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onSortFilterSwitched('vote_average');
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: actionTypes.SORT_FILTER,
            payload: {sortFilterText: 'vote_average'}
        });

        mapDispatchToProps(dispatch).onMovieSearched('test');
        expect(dispatch.mock.calls[1][0]).toBeDefined();

        mapDispatchToProps(dispatch).onSortMovies();
        expect(dispatch.mock.calls[2][0]).toEqual({
            type: actionTypes.SORT_MOVIES
        });

        mapDispatchToProps(dispatch).onSearchFilterSwitched('title');
        expect(dispatch.mock.calls[3][0]).toEqual({
            type: actionTypes.SEARCH_FILTER,
            payload: {searchFilterText: 'title'}
        });

        mapDispatchToProps(dispatch).onMovieChosen(movieItems[0]);
        expect(dispatch.mock.calls[4][0]).toEqual({
            type: actionTypes.PASS_CHOSEN_MOVIE,
            payload: {chosenMovie: movieItems[0]}
        });
    });

    it('capturing Snapshot of MovieHunter', () => {
        const testFunction = () => true;
        const renderedValue = renderer.create(<MovieHunter
            movieItems={initialState.hunter.movieHunterItems}
            sortFilter={initialState.hunter.sortFilter}
            searchFilter={initialState.hunter.searchFilter}
            searchFilterArr={searchByButtonsArr}
            onMovieChosen={testFunction}
            sortFilterArr={sortByButtonsArr}/>).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });

    it('switchSearchFilterHandler dispatch SEARCH_FILTER action', () => {
        wrapper.find(MovieHunter).instance().switchSearchFilterHandler(0);
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: actionTypes.SEARCH_FILTER,
            payload: {searchFilterText: 'title'}
        });
    });

    it('switchSortFilterHandler dispatch SORT_FILTER action', () => {
        let movieHunter = wrapper.find(MovieHunter).instance();
        movieHunter.switchSortFilterHandler(1);
        const action = store.getActions();
        expect(action[0]).toEqual({
                type: actionTypes.SORT_FILTER,
                payload: {sortFilterText: 'vote_average'}
            });
    });

    it('componentDidUpdate dispatch SORT_MOVIES action', () => {
        const prevProp = {sortFilter: 'vote_average'};
        wrapper.find(MovieHunter).instance().componentDidUpdate(prevProp);
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: actionTypes.SORT_MOVIES
        });
    });

    it('check search button click', () => {
        let mockCallBack = jest.fn();
        wrapper = mount(<MovieHunter movieItems={movieItems} onMovieSearched={mockCallBack}/>);
        wrapper.find(SearchPanel).find(Search).find('button').simulate('click');
        expect(mockCallBack).toBeCalled();
    })
});