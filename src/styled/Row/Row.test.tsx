import { shallow } from 'enzyme';
import * as React from 'react';
import { Row } from './Row';

describe('<Row />', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });
});
