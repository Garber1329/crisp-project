import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/exampleSlice'
import blogReducer from './slices/blogSlice'
import loginSlice from './slices/loginSlice'
import productReducer from "./slices/productsSlice";
import otherProducts from './slices/otherProductsSlice.js';
import filterSlice from './slices/filterSlice.js';
import productsSlice from './slices/productsSlice.js';
import notificationSlice from './slices/notificationSlice.js';


const store = configureStore({
  reducer: {
    example: exampleReducer,
    blogsSlice: blogReducer,
    loginSlice: loginSlice,
    products: productReducer,
    otherProducts: otherProducts,
    filters: filterSlice,
    products: productsSlice,
    notification: notificationSlice,
  },
});

export default store;
