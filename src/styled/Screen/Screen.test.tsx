import { shallow } from 'enzyme';
import * as React from 'react';
import { Screen } from './Screen';

describe('<Screen />', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<Screen displayValue="test" />);
        expect(wrapper).toMatchSnapshot();
    });
});
