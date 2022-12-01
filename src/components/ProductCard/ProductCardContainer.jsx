import ProductCard from ".";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { useContext } from "react";
import { NotificationContext } from "../../context/notification/notificationContext";

const ProductCardContainer = ({ product }) => {
    const dispatch = useDispatch();
    const notification = useContext(NotificationContext);
    const { slug } = useSelector(state => state.categories.selectedCategory);
    const { cart } = useSelector(state => state.cart);
    const inCart = cart.find(item => item.id === product.id);

    
    const addToCartHandler = () => {
        dispatch(addToCart(product));
        notification.show('Товар уже в кошику');

        setTimeout(() => {
            notification.hide();
        }, 4000)
    }
    

    return (<ProductCard product={product} categorySlug={slug} addToCartHandler={addToCartHandler} inCart={inCart} />)
}

export default ProductCardContainer;