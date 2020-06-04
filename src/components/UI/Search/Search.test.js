import React, { useRef } from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Search from './Search';

configure({
    adapter: new Adapter()
});

jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
        ...originReact,
        useRef: mUseRef
    };
});

describe('<Search/>', () => {
    const mockCallBack = jest.fn();
    let wrapper;

    beforeEach(() => {
        const mRef = { current: { value: 'Any value' } };
        useRef.mockReturnValueOnce(mRef);
        wrapper = shallow(<Search clicked={mockCallBack}/>);
    });

    it('Search renders correctly', () => {
        const tree = renderer
            .create(<Search clicked={mockCallBack}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Upon the button click callback should be called', () => {
        wrapper.find('button').simulate('click');
        expect(mockCallBack).toHaveBeenCalledWith('any value');
    });
});