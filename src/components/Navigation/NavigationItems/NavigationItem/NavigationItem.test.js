import React from 'react';

import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'
import Magnifier from '../../../../assets/images/magnifier.png';

import NavigationItem from './NavigationItem';

configure({
    adapter: new Adapter()
});

describe('<NavigationItem/>', () => {

    it('NavigationItem renders correctly', () => {
        const tree = renderer
            .create(<NavigationItem link={'/'}><img src={Magnifier} alt="MagnifierSign"/></NavigationItem>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});