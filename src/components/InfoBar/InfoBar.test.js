import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InfoBar from './InfoBar';
import Filter from '../UI/Filter/Filter';

configure({
    adapter: new Adapter()
});

describe('<InfoBar/>', () => {
    let wrapper;

    beforeEach(() => {
        const mockCallBack = jest.fn();
        wrapper = shallow(<InfoBar
            switchSearchFilter={mockCallBack}
            resultText={'some text'}
            showFilter
            label={'sort by'}
            sortByFilter={[]}/>);
    });

    it('InfoBar should have Filter', () => {
        expect(wrapper.find(Filter)).toHaveLength(1);
    });
});