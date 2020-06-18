import React from 'react';

import { configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import MovieItem from './MovieItem';
import { movieItems } from '../../../__mocks__/movieItems';
import ImageNotFound from '../../../assets/images/image_not_found.png';

configure({
    adapter: new Adapter()
});
describe('<MovieItem/>', () => {
    let wrapper;
    const mockCallBack = jest.fn();
    const props = {
        key: movieItems[5].id,
        imgUrl: movieItems[5].poster_path,
        title: movieItems[5].title,
        date: movieItems[5].release_date,
        genre: movieItems[5].genres.join(', '),
        clicked: mockCallBack
    };

    beforeEach(() => {
        wrapper = mount(<MovieItem {...props}/>);
    });

    it('MovieItem should have image and onError handler', () => {
        expect(wrapper.find('img').props())
            .toEqual({
                src: movieItems[5].poster_path,
                onError: expect.any(Function)
            });
    });

    it('MovieItem renders correctly', () => {
        const tree = renderer
            .create(<MovieItem {...props}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call any passed in onError after an image load error', () => {
        const mEvent = {target: wrapper.getDOMNode()};
        wrapper.find('img').prop('onError')(mEvent);
        expect(mEvent.target.src).toBe(ImageNotFound);
    });
})
;