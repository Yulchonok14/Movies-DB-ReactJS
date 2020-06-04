import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from './ErrorBoundary';

configure({
    adapter: new Adapter()
});

describe('<ErrorBoundary/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ErrorBoundary/>);
        wrapper.instance().componentDidCatch('error message');
    });

    it('ErrorBoundary should have error message', () => {
        expect(wrapper.contains(<h1>error message</h1>)).toBeTruthy();
    });
});