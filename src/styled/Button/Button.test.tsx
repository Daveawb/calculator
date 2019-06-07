import { shallow } from 'enzyme';
import * as React from 'react';
import { Button } from './Button';

describe('<Button /> styled component', () => {
    test('matches snapshot', () => {
        const fn = (event: React.MouseEvent) => undefined;
        const wrapper = shallow(<Button fn={fn} />);
        expect(wrapper).toMatchSnapshot();
    });
});
