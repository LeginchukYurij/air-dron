import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import categoriesSlice from './products/categoriesSlice';
import themeSlice from './theme/themeSlice';
import cartSlice from './cart/cartSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    theme: themeSlice,
    cart: cartSlice,
  },
});
