import commerce from '../libs/commerce';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/products/productsSlice';
import { useEffect } from 'react';

export const useProduct = (permalink) => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchSelectedProduct = async () => {
      const product = await commerce.products.retrieve(permalink, { type: 'permalink' });
      dispatch(setSelectedProduct(product));
    };

    fetchSelectedProduct();
  }, [permalink]);

  return selectedProduct;
};
