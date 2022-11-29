import styled from 'styled-components';
import { Container } from './Container';

export const FlexContainer = styled(Container)`
    display: flex;
    align-items: ${props => props.align};
`;