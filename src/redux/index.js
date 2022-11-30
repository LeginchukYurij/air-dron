import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import categoriesSlice from './products/categoriesSlice';
import themeSlice from './theme/themeSlice';
import cartSlice from './cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productsSlice,
  categories: categoriesSlice,
  theme: themeSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
