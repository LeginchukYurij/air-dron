import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from '../Thumbnail';

const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 110px 100px;
  grid-column-gap: 20px;
  border: var(--border-line);
  padding: 15px 20px;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  .col {
    display: flex;
    align-items: center;
  }

`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
`;


const CartItem = ({item}) => {
  const {name, image, price} = item;

  return (
    <CartItemWrapper>
      <Thumbnail url={image.url} />
      <span className="col">
      {name}
      </span>
      <Price className='col'>
        {price.formatted.replace('.00', '')} ₴
      </Price>
    </CartItemWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CartItem;
