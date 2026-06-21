import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import productReducer from "./slices/productsSlice";
import otherProducts from './slices/otherProductsSlice.js';
import filterSlice from './slices/filterSlice.js';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    products: productReducer,
    otherProducts: otherProducts,
    filters: filterSlice,
  },
});

export default store;
