import { shallow } from 'enzyme';
import * as React from 'react';
import { Layout } from './Layout';

describe('<Layout />', () => {
    test('matches snapshot', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper).toMatchSnapshot();
    });
});
