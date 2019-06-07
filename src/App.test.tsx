import { mount, ReactWrapper, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from './styled/Button';
import { Row } from './styled/Row';
import { Screen } from './styled/Screen';

function digitElements(wrapper: ReactWrapper) {
    const values: { [k: string]: string } = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        equals: '=',
        add: '+',
        subtract: '-',
        divide: '÷',
        multiply: 'x',
        decimal: '.',
        percentage: '%',
        reset: 'AC',
    };

    const output: { [k: string]: ReactWrapper } = {};

    for (const prop in values) {
        if (values.hasOwnProperty(prop)) {
            output[prop] = wrapper.find({ value: values[prop] });
        }
    }

    return output;
}

describe('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the calculator layout', () => {
        const wrapper = mount(<App />);
        const rows = wrapper.find(Row);

        // tslint:disable-next-line:prettier
        const layout = [
            ['AC', '+ / -', '%', '÷'],
            ['7', '8', '9', 'x'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '='],
        ];

        expect(rows.length).toEqual(layout.length);

        rows.forEach((row, index) => {
            const expectedRow = layout[index];
            const children = row.find(Button);

            expect(children.length).toEqual(expectedRow.length);

            children.forEach((button, childIndex) => {
                expect(button.text()).toBe(expectedRow[childIndex]);
            });
        });
    });

    describe('clicking on numbers', () => {
        it('can add numbers that are rendered in the screen component', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { one, three, nine } = digitElements(wrapper);

            one.first().simulate('click');
            three.first().simulate('click');
            nine.first().simulate('click');

            expect(screen.text()).toEqual('139');
        });

        it('can add decimals', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { one, three, nine, decimal } = digitElements(wrapper);

            one.first().simulate('click');
            decimal.first().simulate('click');
            three.first().simulate('click');
            nine.first().simulate('click');

            expect(screen.text()).toEqual('1.39');
        });
    });

    describe('basic aritmetic', () => {
        it('sums two numbers', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { two, eight, add, equals } = digitElements(wrapper);

            two.first().simulate('click');
            add.first().simulate('click');
            eight.first().simulate('click');
            equals.first().simulate('click');

            expect(screen.text()).toEqual('10');
        });

        it('subtracts two numbers', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { two, eight, subtract, equals } = digitElements(wrapper);

            eight.first().simulate('click');
            subtract.first().simulate('click');
            two.first().simulate('click');
            equals.first().simulate('click');

            expect(screen.text()).toEqual('6');
        });

        it('divides a number by another', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { two, eight, divide, equals } = digitElements(wrapper);

            eight.first().simulate('click');
            divide.first().simulate('click');
            two.first().simulate('click');
            equals.first().simulate('click');

            expect(screen.text()).toEqual('4');
        });

        it('multiplies a number by another', () => {
            const wrapper = mount(<App />);
            const screen = wrapper.find(Screen);

            const { two, eight, multiply, equals } = digitElements(wrapper);

            eight.first().simulate('click');
            multiply.first().simulate('click');
            two.first().simulate('click');
            equals.first().simulate('click');

            expect(screen.text()).toEqual('16');
        });
    });
});
