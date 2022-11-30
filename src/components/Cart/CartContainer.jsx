import { useSelector } from "react-redux";
import Cart from ".";

const CartContainer = () => {
    const allQuantity = useSelector(state => state.cart.allQuantity);

    return ( <Cart allQuantity={allQuantity} /> );
}

export default CartContainer;