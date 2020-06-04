import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchPanel from './SearchPanel';
import Search from '../UI/Search/Search';
import Filter from '../UI/Filter/Filter';

import { searchByButtonsArr } from '../../__mocks__/searchButtons';

configure({
    adapter: new Adapter()
});

describe('<SearchPanel/>', () => {
    let wrapper;

    beforeEach(() => {
        const mockCallBack = jest.fn();
        wrapper = shallow(<SearchPanel
            searchBtn={mockCallBack}
            switchSearchFilter={mockCallBack}
            showSearch
            label={'search by'}
            searchByFilter={searchByButtonsArr}/>);
    });

    it('SearchPanel should have Search and Filter', () => {
        expect(wrapper.find(Search)).toHaveLength(1);
        expect(wrapper.find(Filter)).toHaveLength(1);
    });
});
