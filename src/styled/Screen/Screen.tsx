import styled from 'styled-components';
import { RawScreen } from './RawScreen';

export const Screen = styled(RawScreen)`
    flex-grow: 1;
    font-size: 4rem;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-right: 4px;
    margin-left: 4px;
    padding-left: 0.5rem;
    border: 2px solid #eee;
    background-color: #fff;
    border-radius: 1rem;
    overflow: hidden;
`;
