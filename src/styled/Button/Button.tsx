import * as React from 'react';
import styled, { css } from 'styled-components';
import { RawButton, RawButtonProps } from './RawButton';

export type ButtonProps = RawButtonProps & {
    grow?: boolean;
    bg?: string;
    bgHover?: string;
};

export const Button: React.ComponentType<ButtonProps> = styled(RawButton)`
    display: flex;
    justify-content: center;
    min-width: 90px;
    min-height: 90px;
    margin: 4px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    border: none;
    box-shadow: 1px 1px 3px rgba(1, 1, 1, 0.2);

    ${(props: ButtonProps) =>
        props.grow &&
        css`
            flex-grow: 1;
        `}

    ${(props: ButtonProps) => {
        const bg: string = props.bg || '#1795d4';
        const bgHover: string = props.bgHover || '#196b98';

        return css`
            background-color: ${bg};

            &:hover,
            &:focus {
                background-color: ${bgHover};
            }
        `;
    }}
`;
