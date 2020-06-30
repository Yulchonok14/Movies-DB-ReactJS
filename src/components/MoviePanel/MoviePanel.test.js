import React from 'react';

import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MoviePanel from './MoviePanel';
import { movieItems } from '../../__mocks__/movieItems';
import ImageNotFound from '../../assets/images/image_not_found.png';

configure({
    adapter: new Adapter()
});

describe('<MoviePanel/>', () => {
    let wrapper;

    beforeEach(()=> {
        wrapper = mount(<MoviePanel selectedMovie={movieItems[5]}/>);
    });

    it('MoviePanel renders correctly', () => {
        const tree = renderer
            .create(<MoviePanel selectedMovie={movieItems[5]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call any passed in onError after an image load error', () => {
        const mEvent = {target: wrapper.getDOMNode()};
        wrapper.find('img').prop('onError')(mEvent);
        expect(mEvent.target.src).toBe('/'+ImageNotFound);
    });

    it('empty runtime should remove label', () => {
        let movieItemNotRuntime = {...movieItems[5]};
        movieItemNotRuntime.runtime = '';
        expect(wrapper.find('label')).toHaveLength(2);
        wrapper = mount(<MoviePanel selectedMovie={movieItemNotRuntime}/>);
        expect(wrapper.find('label')).toHaveLength(1);
    })
});