import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MoviePanel from './MoviePanel';
import { movieItems } from '../../__mocks__/movieItems';

configure({
    adapter: new Adapter()
});

describe('<MoviePanel/>', () => {

    it('MoviePanel renders correctly', () => {
        const tree = renderer
            .create(<MoviePanel selectedMovie={movieItems[5]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});