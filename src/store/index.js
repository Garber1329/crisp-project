import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import otherProducts from './slices/otherProductsSlice.js';
import filterSlice from './slices/filterSlice.js';
import productsSlice from './slices/productsSlice.js';
import notificationSlice from './slices/notificationSlice.js';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    otherProducts: otherProducts,
    filters: filterSlice,
    products: productsSlice,
    notification: notificationSlice,
  },
});

export default store;
