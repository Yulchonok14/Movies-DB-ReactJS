import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Filter from './Filter';
import { sortByButtonsArr } from '../../../__mocks__/sortButtons';

configure({
    adapter: new Adapter()
});

describe('<Filter/>', () => {
    const mockCallBack = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Filter label="Label"/>);
    });

    it('Filter should have buttons', () => {
        wrapper.setProps({
            clicked: mockCallBack,
            show: true,
            label: 'Label',
            buttons: sortByButtonsArr
        });
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('Filter should not have buttons', () => {
        wrapper.setProps({
            clicked: mockCallBack,
            show: false,
            label: 'Label',
            buttons: []
        });
        expect(wrapper.contains(<label>Label</label>)).toBeTruthy();
    });

    it('Upon the button click callback should be called', () => {
        wrapper.setProps({
            clicked: mockCallBack,
            show: true,
            label: 'Label',
            buttons: sortByButtonsArr
        });
        wrapper.find('button').first().simulate('click');
        expect(mockCallBack).toHaveBeenCalled();
    });

    it('Filter renders correctly', () => {
        const tree = renderer
            .create(<Filter clicked={mockCallBack}
                            show
                            label={'Label'}
                            buttons={sortByButtonsArr}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});