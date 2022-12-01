import styled from "styled-components";
import { PrimeryLink } from "../../UI";

const CartTotalWrapper = styled.div`
    span {
        display: block;
        text-align: center;
        margin-bottom: 20px;
    }

    strong {
        display: block;
        font-weight: bold;
        font-size: 22px;
        text-align: center;
    }

    .btn {
        margin-top: 40px;
    }
`;

const CartTotal = ({totalAmount, allQuantity}) => {
  return (
    <CartTotalWrapper>
        <span>В кошику {allQuantity} товар</span>

        <strong>{totalAmount} ₴</strong>

        <PrimeryLink to="/checkout">
            Оформити замовлення
        </PrimeryLink>
    </CartTotalWrapper>
  )
};

export default CartTotal;