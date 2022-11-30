import ProductCard from ".";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

const ProductCardContainer = ({ product }) => {
    const dispatch = useDispatch();
    const { slug } = useSelector(state => state.categories.selectedCategory);
    const { cart } = useSelector(state => state.cart);
    const inCart = cart.find(item => item.id === product.id);

    
    const addToCartHandler = () => {
        dispatch(addToCart(product));
    }

    return (<ProductCard product={product} categorySlug={slug} addToCartHandler={addToCartHandler} inCart={inCart} />)
}

export default ProductCardContainer;