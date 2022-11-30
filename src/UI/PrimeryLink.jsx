import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NLink } from '../components';

const Button = styled.div`
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 100%;
        border-radius: 5px;
        background-color: var(--accent);
        color: #fff;
        height: 50px;
        font-size: calc(var(--txt-base) + 2px);
        cursor: pointer;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const PrimeryLink = ({children, to}) => {
  return (
    <Button className='btn'>
        <NLink to={to}>
            { children }
        </NLink>
    </Button>
  )
}

PrimeryLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default PrimeryLink;