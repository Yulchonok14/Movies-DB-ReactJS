import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MovieHunter from './MovieHunter';
import { movieItems } from '../../__mocks__/movieItems';
import { sortByButtonsArr } from '../../__mocks__/sortButtons';
import { searchByButtonsArr } from '../../__mocks__/searchButtons';

configure({
    adapter: new Adapter()
});

describe('<MovieHunter/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MovieHunter/>);
        wrapper.setState({
            movieItems: movieItems,
            searchFilterArr: searchByButtonsArr,
            sortFilterArr: sortByButtonsArr,
            chosenMovieItem: null
        })
    });

    it('switchSortFilterHandler should set active chosen element by index and sort by dating', () => {
        wrapper.instance().switchSortFilterHandler(0);
        expect(wrapper.instance().state.sortFilterArr[0].isActive).toBeTruthy();
        expect(wrapper.instance().state.movieItems[0]).toEqual(movieItems[0]);
    });

    it('switchSortFilterHandler should set active chosen element by index and sort by rating', () => {
        wrapper.instance().switchSortFilterHandler(1);
        expect(wrapper.instance().state.sortFilterArr[1].isActive).toBeTruthy();
        expect(wrapper.instance().state.movieItems[0]).toEqual(movieItems[4]);
    });

    it('chosenItemHandler should choose movie item by index', () => {
        wrapper.instance().chosenItemHandler(0);
        expect(wrapper.instance().state.chosenMovieItem).toEqual(movieItems[0]);
    });

    it('searchBtnHandler should choose movie items by text', () => {
        wrapper.instance().switchSearchFilterHandler(0);
        wrapper.instance().searchBtnHandler('bloodshot');
        expect(wrapper.instance().state.movieItems[0]).toEqual(movieItems[0]);
    });

    it('MovieHunter renders correctly', () => {
        const tree = renderer
            .create(<MovieHunter/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});