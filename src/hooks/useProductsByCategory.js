import commerce from '../libs/commerce';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/products/productsSlice';

export const useProductsByCategory = (categorySlug) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await commerce.products.list({
        category_slug: [categorySlug],
      });
      dispatch(setProducts(products));
    };

    fetchProducts();
  }, [categorySlug]);

  return products;
};
