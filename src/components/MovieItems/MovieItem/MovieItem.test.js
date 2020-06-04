import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MovieItem from './MovieItem';
import { movieItems } from '../../../__mocks__/movieItems';

configure({
    adapter: new Adapter()
});

describe('<MovieItems/>', () => {
    let wrapper;
    const mockCallBack = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<MovieItem key={movieItems[5].id}
                                     imgUrl={movieItems[5].imageUrl}
                                     title={movieItems[5].title}
                                     date={movieItems[5].date}
                                     genre={movieItems[5].genre}
                                     clicked={mockCallBack}/>);
    });

    it('MovieItem should have image', () => {
        expect(wrapper.contains(<img src={movieItems[5].imageUrl}/>)).toBeTruthy();
    });

    it('MovieItem renders correctly', () => {
        const tree = renderer
            .create(<MovieItem key={movieItems[5].id}
                               imgUrl={movieItems[5].imageUrl}
                               title={movieItems[5].title}
                               date={movieItems[5].date}
                               genre={movieItems[5].genre}
                               clicked={mockCallBack}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});