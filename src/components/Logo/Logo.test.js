import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

configure({
    adapter: new Adapter()
});

describe('<Logo/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Logo/>);
    });

    it('Logo should have span', () => {
        expect(wrapper.contains(<span><strong>netflix</strong>roulette</span>)).toBeTruthy();
    });
});