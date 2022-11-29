import styled from 'styled-components';
import { BsCartFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const CartWrapper = styled.div`
    margin-left: 60px;
    position: relative;
    width: 20px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #F63747;
        font-size: 10px;
        color: #fff;
        position: absolute;
        top: -5px;
        right: -5px;
    }

    svg {
        color: var(--contrast);
    }
`;


const Cart = () => {
  return (
    <CartWrapper>
        <NavLink to="/cart">
            <BsCartFill
                size="20px" />

            <span>1</span>
        </NavLink>
    </CartWrapper>
  )
};

export default Cart;