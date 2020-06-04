import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

configure({
    adapter: new Adapter()
});

describe('<Layout/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout/>);
    });

    it('Layout should have Toolbar and Footer', () => {
        expect(wrapper.find(Toolbar)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
});