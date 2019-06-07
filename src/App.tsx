import React, { useState } from 'react';
import './App.css';
import { isValue } from './library/guards';
import { add, divide, multiply, percentage, subtract } from './library/operators';
import { Operator } from './react-app-env';
import logo from './resources/images/equal-experts.svg';
import { Button } from './styled/Button';
import { Layout } from './styled/Layout';
import { Row } from './styled/Row';
import { Screen } from './styled/Screen';

export type AppState = {
    readonly value: string;
    readonly operator: Operator | null;
    readonly previousValue: string | null;
};

const initialState: AppState = {
    value: '0',
    operator: null,
    previousValue: null,
};

const App: React.FC = () => {
    const [state, setState] = useState<AppState>(initialState);

    const applyNumber = (num: number) => (event: React.MouseEvent) => {
        event.preventDefault();
        const value = state.value === '0' ? num.toString() : state.value + num.toString();
        setState({
            ...state,
            value,
        });
    };

    const applyDecimal = (event: React.MouseEvent) => {
        event.preventDefault();
        setState({
            ...state,
            value: state.value + '.',
        });
    };

    const applyOperator = (operator: Operator) => (event: React.MouseEvent) => {
        event.preventDefault();
        const partialOperator = operator.bind(null, parseFloat(state.value));
        setState({
            ...state,
            value: '0',
            operator: partialOperator,
            previousValue: state.value,
        });
    };

    const applyPercentage = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!isValue(state.operator) || !isValue(state.previousValue)) {
            return;
        }

        setState({
            ...state,
            value: state.operator(percentage(parseFloat(state.previousValue), parseFloat(state.value))).toString(),
            operator: null,
            previousValue: null,
        });
    };

    const reset = (event: React.MouseEvent) => {
        event.preventDefault();
        setState(initialState);
    };

    const toggleSign = (event: React.MouseEvent) => {
        event.preventDefault();
        const value = parseFloat(state.value);
        const sign = Math.sign(value);

        if (sign === 0 || isNaN(sign)) {
            return;
        }

        const applyValue = sign === -1 ? Math.abs(value) : value * -1;

        setState({
            ...state,
            value: applyValue.toString(),
        });
    };

    const calculate = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!isValue(state.operator)) {
            return;
        }

        setState({
            ...initialState,
            value: state.operator(parseFloat(state.value)).toString(),
        });
    };

    return (
        <div className="App">
            <Layout>
                <img className="App-logo" src={logo} alt="Equal experts" />
                <Screen displayValue={state.value} />
                <Row>
                    <Button value="AC" fn={reset} />
                    <Button value="+ / -" fn={toggleSign} />
                    <Button value="%" fn={applyPercentage} />
                    <Button value="÷" fn={applyOperator(divide)} bg="#373d45" bgHover="#24282d" />
                </Row>
                <Row>
                    <Button value="7" fn={applyNumber(7)} />
                    <Button value="8" fn={applyNumber(8)} />
                    <Button value="9" fn={applyNumber(9)} />
                    <Button value="x" fn={applyOperator(multiply)} bg="#373d45" bgHover="#24282d" />
                </Row>
                <Row>
                    <Button value="4" fn={applyNumber(4)} />
                    <Button value="5" fn={applyNumber(5)} />
                    <Button value="6" fn={applyNumber(6)} />
                    <Button value="-" fn={applyOperator(subtract)} bg="#373d45" bgHover="#24282d" />
                </Row>
                <Row>
                    <Button value="1" fn={applyNumber(1)} />
                    <Button value="2" fn={applyNumber(2)} />
                    <Button value="3" fn={applyNumber(3)} />
                    <Button value="+" fn={applyOperator(add)} bg="#373d45" bgHover="#24282d" />
                </Row>
                <Row>
                    <Button value="0" fn={applyNumber(0)} grow={true} />
                    <Button value="." fn={applyDecimal} />
                    <Button value="=" fn={calculate} bg="#373d45" bgHover="#24282d" />
                </Row>
            </Layout>
        </div>
    );
};

export default App;
