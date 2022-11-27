import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import categoriesSlice from './products/categoriesSlice';
import themeSlice from './theme/themeSlice';


export default configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    theme: themeSlice
  },
});
