import { shallow } from 'enzyme';
import * as React from 'react';
import { RawButton } from './RawButton';

describe('<RawButton />', () => {
    test('it renders child props', () => {
        const fn = () => undefined;
        const wrapper = shallow(<RawButton value="Child text" fn={fn} />);
        expect(wrapper.find('span').text()).toBe('Child text');
    });

    test('on click it uses the fn prop', () => {
        const fn = jest.fn();
        const wrapper = shallow(<RawButton value="Child text" fn={fn} />);
        wrapper.simulate('click');
        expect(fn).toHaveBeenCalled();
    });
});
