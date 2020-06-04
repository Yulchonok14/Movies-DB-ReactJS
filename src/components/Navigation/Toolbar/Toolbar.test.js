import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from '../NavigationItems/NavigationItems';
import Toolbar from './Toolbar';

configure({
    adapter: new Adapter()
});

describe('<Toolbar/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Toolbar/>);
    });

    it('Toolbar should have NavigationItems', () => {
        expect(wrapper.find(NavigationItems)).toHaveLength(1);
    });
});
