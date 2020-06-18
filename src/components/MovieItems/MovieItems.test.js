import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieItem from './MovieItem/MovieItem';
import MovieItems from './MovieItems';
import { movieItems } from '../../__mocks__/movieItems';

configure({
    adapter: new Adapter()
});

describe('<MovieItems/>', () => {
    let wrapper;
    let mockCallBack;

    beforeEach(() => {
        mockCallBack = jest.fn();
        wrapper = mount(<MovieItems movieItems={movieItems} chosenItem={mockCallBack}/>);
    });

    describe('If there are films', () => {
        it('MovieItems should have MovieItem', () => {
            expect(wrapper.find(MovieItem)).toHaveLength(6);
        });
    });

    describe('If there are no films', () => {
        beforeEach(() => {
            wrapper.setProps({movieItems: []});
        });

        it('MovieItems should have empty films result string', () => {
            expect(wrapper.contains(<div>No films found</div>)).toBeTruthy();
        });
    });

    describe('Callback upon the button click', () => {
        beforeEach(() => {
            wrapper = mount(<MovieItems movieItems={movieItems} chosenItem={mockCallBack}/>);
            wrapper.find(MovieItem).first().simulate('click');
        });

        it('should be called', () => {
            expect(mockCallBack).toHaveBeenCalled();
        });
    });
});
