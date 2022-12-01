import { useSelector } from 'react-redux';
import CartTotal from '.';

const CartTotalContainer = () => {
    const {cart, allQuantity} = useSelector(state => state.cart);
    
    const totalAmount = cart.reduce((amount, item) => {
        return amount += item.price.raw;
    }, 0);

    return (
        <CartTotal totalAmount={totalAmount} allQuantity={allQuantity} />
    )
};

export default CartTotalContainer;