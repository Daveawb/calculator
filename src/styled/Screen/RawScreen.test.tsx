import { shallow } from 'enzyme';
import * as React from 'react';
import { RawScreen } from './RawScreen';

describe('<RawScreen />', () => {
    test('expect display value is set', () => {
        const wrapper = shallow(<RawScreen displayValue="test" />);
        const container = wrapper.find('span');
        expect(container.text()).toEqual('test');
    });
});
