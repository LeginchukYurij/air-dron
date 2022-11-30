import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
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

    &:hover {
        opacity: 0.8;
    }
`;

const PrimeryButton = ({ clickHandler = () => {}, children }) => {
  return (
    <Button className='btn' onClick={ () => clickHandler() }>
        { children }
    </Button>
  )
};

PrimeryButton.propTypes = {
    clickHandler : PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default PrimeryButton;