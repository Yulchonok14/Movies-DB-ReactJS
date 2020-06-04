import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './hoc/Layout/Layout';

configure({
    adapter: new Adapter()
});

describe('<App/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('App should have ErrorBoundary and Layout', () => {
        expect(wrapper.find(ErrorBoundary)).toHaveLength(1);
        expect(wrapper.find(Layout)).toHaveLength(1);
    });
});