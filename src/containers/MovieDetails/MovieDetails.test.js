import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MovieDetails from './MovieDetails';
import { movieItems } from '../../__mocks__/movieItems';

configure({
    adapter: new Adapter()
});

describe('<MovieDetails/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MovieDetails/>);
    });

    it('chosenItemHandler should choose movie item by index', () => {
        wrapper.setState({
            chosenMovieItem: movieItems[0],
            movieItems: [],
            genre: movieItems[0].genre.slice(0, movieItems[0].genre.indexOf(','))
        });
        wrapper.instance().componentDidMount();
        wrapper.instance().chosenItemHandler(0);
        expect(wrapper.instance().state.chosenMovieItem).toEqual(movieItems[2]);
    });

    it('chosenItemHandler should choose movie item by index', () => {
        wrapper.setState({
            chosenMovieItem: movieItems[3],
            movieItems: [],
            genre: movieItems[3].genre.slice(0, movieItems[3].genre.indexOf(','))
        });
        wrapper.instance().componentDidMount();
        wrapper.instance().chosenItemHandler(1);
        expect(wrapper.instance().state.genre).toBe('Drama');
    });

    it('searchMovieByGenre should choose movie items by genre excluding a chosen one', () => {
        wrapper.instance().searchMovieByGenre('action');
        expect(wrapper.instance().state.movieItems).toHaveLength(1);
    });

    it('MovieDetails renders correctly', () => {
        const tree = renderer
            .create(<MovieDetails/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});