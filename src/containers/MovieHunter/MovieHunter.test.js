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

describe('ConnectedMovieHunter', () => {
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
    jest.spyOn(ConnectedMovieHunter.WrappedComponent.prototype, 'componentDidMount').mockImplementation();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<ConnectedMovieHunter store={store}/>);
    });

    it('check Prop matches with initialState', () => {
        expect(wrapper.find(MovieHunter).prop('movieItems')).toEqual(initialState.hunter.movieHunterItems);
        expect(wrapper.find(MovieHunter).prop('sortFilter')).toEqual(initialState.hunter.sortFilter);
        expect(wrapper.find(MovieHunter).prop('searchFilter')).toEqual(initialState.hunter.searchFilter);
    });
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
    let mockCallBack = jest.fn();
    let mockSortFilterSwitchedCallBack = jest.fn();
    let mockSearchFilterSwitchedCallBack = jest.fn();
    let mockSortMoviesCallBack = jest.fn();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<MovieHunter
            onSortMovies={mockSortMoviesCallBack}
            movieItems={movieItems}
            onMovieSearched={mockCallBack}
            onMovieChosen={mockCallBack}
            onSortFilterSwitched={mockSortFilterSwitchedCallBack}
            onSearchFilterSwitched={mockSearchFilterSwitchedCallBack}
            history={[]}/>);
    });

    it('render the connected component', () => {
        expect(wrapper.length).toEqual(1);
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
        wrapper.instance().switchSearchFilterHandler(0);
        store.dispatch(actionCreators.searchFilter('title'));
        const action = store.getActions();
        expect(mockSearchFilterSwitchedCallBack).toBeCalled();
        expect(action[0]).toEqual({
            type: actionTypes.SEARCH_FILTER,
            payload: {searchFilterText: 'title'}
        });
    });

    it('switchSortFilterHandler dispatch SORT_FILTER action', () => {
        let movieHunter = wrapper.instance();
        movieHunter.switchSortFilterHandler(1);
        store.dispatch(actionCreators.sortFilter('vote_average'));
        const action = store.getActions();
        expect(mockSearchFilterSwitchedCallBack).toBeCalled();
        expect(action[0]).toEqual({
                type: actionTypes.SORT_FILTER,
                payload: {sortFilterText: 'vote_average'}
            });
    });

    it('componentDidUpdate dispatch SORT_MOVIES action', () => {
        const prevProp = {sortFilter: 'vote_average'};
        store.dispatch(actionCreators.sortMovies());
        wrapper.instance().componentDidUpdate(prevProp);
        const action = store.getActions();
        expect(mockSortMoviesCallBack).toBeCalled();
        expect(action[0]).toEqual({
            type: actionTypes.SORT_MOVIES
        });
    });

    it('check search button click', () => {
        wrapper.find(SearchPanel).find(Search).find('button').simulate('click');
        expect(mockCallBack).toBeCalled();
    })
});