import PropTypes from 'prop-types';
import CartItem from ".";

const CartItemContainer = ({item}) => {
  return (
    <CartItem item={item} />
  )
};

CartItemContainer.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CartItemContainer;